#!/usr/bin/env node

const https = require('https');
const http = require('http');
const dns = require('dns');
const { exec } = require('child_process');
const fs = require('fs');

console.log('🔍 DIAGNOSTIC COMPLET - DIGISERVWEB.COM');
console.log('==========================================\n');

// Configuration
const domain = 'digiservweb.com';
const testUrls = [
  `http://${domain}`,
  `https://${domain}`,
  `http://www.${domain}`,
  `https://www.${domain}`
];

// 1. Test DNS
async function testDNS() {
  console.log('1️⃣ TEST DNS');
  console.log('-----------');
  
  try {
    const addresses = await new Promise((resolve, reject) => {
      dns.resolve4(domain, (err, addresses) => {
        if (err) reject(err);
        else resolve(addresses);
      });
    });
    
    console.log(`✅ DNS résolu pour ${domain}:`);
    addresses.forEach(addr => console.log(`   📍 ${addr}`));
    
    // Test reverse DNS
    for (const addr of addresses) {
      try {
        const hostnames = await new Promise((resolve, reject) => {
          dns.reverse(addr, (err, hostnames) => {
            if (err) reject(err);
            else resolve(hostnames);
          });
        });
        console.log(`   🔄 Reverse DNS pour ${addr}: ${hostnames.join(', ')}`);
      } catch (err) {
        console.log(`   ⚠️  Pas de reverse DNS pour ${addr}`);
      }
    }
  } catch (err) {
    console.log(`❌ Erreur DNS: ${err.message}`);
  }
  console.log('');
}

// 2. Test de connectivité
function testConnectivity(url) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https') ? https : http;
    const startTime = Date.now();
    
    const req = protocol.get(url, { timeout: 10000 }, (res) => {
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      
      resolve({
        url,
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: res.headers,
        responseTime,
        success: true
      });
    });
    
    req.on('error', (err) => {
      resolve({
        url,
        error: err.message,
        code: err.code,
        success: false
      });
    });
    
    req.on('timeout', () => {
      req.destroy();
      resolve({
        url,
        error: 'Timeout',
        success: false
      });
    });
  });
}

async function testAllUrls() {
  console.log('2️⃣ TEST DE CONNECTIVITÉ');
  console.log('----------------------');
  
  for (const url of testUrls) {
    console.log(`🔗 Test: ${url}`);
    const result = await testConnectivity(url);
    
    if (result.success) {
      console.log(`   ✅ Status: ${result.status} ${result.statusText}`);
      console.log(`   ⏱️  Temps de réponse: ${result.responseTime}ms`);
      console.log(`   📄 Content-Type: ${result.headers['content-type'] || 'Non spécifié'}`);
      console.log(`   🖥️  Server: ${result.headers.server || 'Non spécifié'}`);
      
      if (result.headers.location) {
        console.log(`   🔄 Redirection: ${result.headers.location}`);
      }
    } else {
      console.log(`   ❌ Erreur: ${result.error}`);
      if (result.code) {
        console.log(`   🔍 Code: ${result.code}`);
      }
    }
    console.log('');
  }
}

// 3. Test de ports
function testPort(host, port) {
  return new Promise((resolve) => {
    const net = require('net');
    const socket = new net.Socket();
    
    socket.setTimeout(5000);
    
    socket.on('connect', () => {
      socket.destroy();
      resolve({ port, status: 'open' });
    });
    
    socket.on('timeout', () => {
      socket.destroy();
      resolve({ port, status: 'timeout' });
    });
    
    socket.on('error', (err) => {
      resolve({ port, status: 'closed', error: err.message });
    });
    
    socket.connect(port, host);
  });
}

async function testPorts() {
  console.log('3️⃣ TEST DES PORTS');
  console.log('-----------------');
  
  const dns = require('dns');
  const addresses = await new Promise((resolve) => {
    dns.resolve4(domain, (err, addresses) => {
      resolve(err ? [] : addresses);
    });
  });
  
  if (addresses.length === 0) {
    console.log('❌ Impossible de résoudre le DNS pour tester les ports');
    return;
  }
  
  const host = addresses[0];
  const ports = [80, 443, 8080, 3000, 8000];
  
  console.log(`🔍 Test des ports sur ${host}:`);
  
  for (const port of ports) {
    const result = await testPort(host, port);
    if (result.status === 'open') {
      console.log(`   ✅ Port ${port}: OUVERT`);
    } else if (result.status === 'timeout') {
      console.log(`   ⏱️  Port ${port}: TIMEOUT`);
    } else {
      console.log(`   ❌ Port ${port}: FERMÉ`);
    }
  }
  console.log('');
}

// 4. Test WHOIS
function testWhois() {
  return new Promise((resolve) => {
    exec(`whois ${domain}`, { timeout: 10000 }, (error, stdout, stderr) => {
      if (error) {
        resolve({ error: error.message });
      } else {
        resolve({ data: stdout });
      }
    });
  });
}

async function showWhois() {
  console.log('4️⃣ INFORMATION WHOIS');
  console.log('-------------------');
  
  const result = await testWhois();
  
  if (result.error) {
    console.log(`❌ Erreur WHOIS: ${result.error}`);
  } else {
    const lines = result.data.split('\n');
    const importantInfo = lines.filter(line => 
      line.includes('Registrar:') ||
      line.includes('Name Server:') ||
      line.includes('Status:') ||
      line.includes('Created:') ||
      line.includes('Updated:') ||
      line.includes('Expires:')
    );
    
    if (importantInfo.length > 0) {
      importantInfo.forEach(line => {
        console.log(`   📋 ${line.trim()}`);
      });
    } else {
      console.log('   ℹ️  Informations WHOIS non disponibles');
    }
  }
  console.log('');
}

// 5. Test de ping
function testPing() {
  return new Promise((resolve) => {
    exec(`ping -c 3 ${domain}`, { timeout: 15000 }, (error, stdout, stderr) => {
      if (error) {
        resolve({ error: error.message });
      } else {
        resolve({ data: stdout });
      }
    });
  });
}

async function showPing() {
  console.log('5️⃣ TEST PING');
  console.log('------------');
  
  const result = await testPing();
  
  if (result.error) {
    console.log(`❌ Erreur ping: ${result.error}`);
  } else {
    const lines = result.data.split('\n');
    const pingStats = lines.filter(line => 
      line.includes('packets transmitted') ||
      line.includes('min/avg/max') ||
      line.includes('round-trip')
    );
    
    if (pingStats.length > 0) {
      pingStats.forEach(line => {
        console.log(`   📊 ${line.trim()}`);
      });
    } else {
      console.log('   ℹ️  Statistiques ping non disponibles');
    }
  }
  console.log('');
}

// 6. Vérification du build local
function checkLocalBuild() {
  console.log('6️⃣ VÉRIFICATION DU BUILD LOCAL');
  console.log('------------------------------');
  
  const distPath = './dist';
  
  if (fs.existsSync(distPath)) {
    console.log('✅ Dossier dist/ existe');
    
    const files = fs.readdirSync(distPath);
    console.log(`📁 Fichiers dans dist/: ${files.length}`);
    
    const importantFiles = ['index.html', 'manifest.json', 'robots.txt', 'sitemap.xml'];
    importantFiles.forEach(file => {
      const exists = fs.existsSync(`${distPath}/${file}`);
      console.log(`   ${exists ? '✅' : '❌'} ${file}`);
    });
    
    // Vérifier la taille du build
    const stats = fs.statSync(distPath);
    console.log(`📦 Taille totale: ${(stats.size / 1024).toFixed(2)} KB`);
  } else {
    console.log('❌ Dossier dist/ n\'existe pas');
  }
  console.log('');
}

// 7. Recommandations
function showRecommendations() {
  console.log('7️⃣ RECOMMANDATIONS');
  console.log('------------------');
  
  console.log('🔧 Actions à effectuer:');
  console.log('   1. Contacter votre hébergeur pour vérifier:');
  console.log('      - L\'état du serveur web (Apache/Nginx)');
  console.log('      - La configuration DNS');
  console.log('      - Les logs d\'erreur');
  console.log('      - Les pare-feu et restrictions');
  console.log('');
  console.log('   2. Vérifier la configuration de votre hébergeur:');
  console.log('      - Point d\'entrée (index.html)');
  console.log('      - Support des applications React/SPA');
  console.log('      - Configuration SSL/HTTPS');
  console.log('');
  console.log('   3. Uploader le contenu du dossier dist/ sur votre hébergeur');
  console.log('');
  console.log('   4. Tester avec un domaine temporaire si nécessaire');
}

// Exécution du diagnostic
async function runDiagnostic() {
  try {
    await testDNS();
    await testAllUrls();
    await testPorts();
    await showWhois();
    await showPing();
    checkLocalBuild();
    showRecommendations();
  } catch (error) {
    console.error('❌ Erreur lors du diagnostic:', error.message);
  }
}

// Lancer le diagnostic
runDiagnostic(); 