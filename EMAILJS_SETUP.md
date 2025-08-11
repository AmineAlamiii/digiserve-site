# Configuration EmailJS pour le formulaire de contact

## Étapes pour configurer EmailJS

### 1. Créer un compte EmailJS
1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Connectez-vous à votre compte

### 2. Configurer un service email
1. Dans votre dashboard EmailJS, allez dans "Email Services"
2. Cliquez sur "Add New Service"
3. Choisissez votre fournisseur d'email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre compte email
5. Notez le **Service ID** généré

### 3. Créer un template d'email
1. Allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. Utilisez ce template HTML :

```html
<h2>Nouveau message de contact - DigiservWeb</h2>

<p><strong>Nom :</strong> {{from_name}}</p>
<p><strong>Email :</strong> {{from_email}}</p>
<p><strong>Téléphone :</strong> {{from_phone}}</p>
<p><strong>Entreprise :</strong> {{from_company}}</p>
<p><strong>Service souhaité :</strong> {{service}}</p>

<h3>Message :</h3>
<p>{{message}}</p>

<hr>
<p><em>Ce message a été envoyé depuis le formulaire de contact de votre site web.</em></p>
```

4. Sauvegardez le template et notez le **Template ID**

### 4. Obtenir votre clé publique
1. Allez dans "Account" > "API Keys"
2. Copiez votre **Public Key**

### 5. Mettre à jour le code
Remplacez les valeurs suivantes dans `src/components/Contact.tsx` :

```typescript
// Ligne 15 : Remplacez YOUR_PUBLIC_KEY
emailjs.init("VOTRE_PUBLIC_KEY_ICI");

// Ligne 35 : Remplacez YOUR_SERVICE_ID
'VOTRE_SERVICE_ID_ICI'

// Ligne 36 : Remplacez YOUR_TEMPLATE_ID  
'VOTRE_TEMPLATE_ID_ICI'
```

### 6. Tester le formulaire
1. Lancez votre application : `npm run dev`
2. Remplissez le formulaire de contact
3. Cliquez sur "Envoyer ma demande"
4. Vérifiez que vous recevez l'email sur `contact@digiservweb.com`

## Variables disponibles dans le template
- `{{from_name}}` : Nom du contact
- `{{from_email}}` : Email du contact
- `{{from_phone}}` : Téléphone du contact
- `{{from_company}}` : Entreprise du contact
- `{{service}}` : Service souhaité
- `{{message}}` : Message du contact
- `{{to_email}}` : Email de destination (contact@digiservweb.com)

## Plan gratuit EmailJS
- 200 emails par mois
- 2 services email
- Templates illimités
- Support par email

## Dépannage
- Vérifiez que tous les IDs sont corrects
- Assurez-vous que votre service email est bien connecté
- Vérifiez la console du navigateur pour les erreurs
- Testez avec un email valide 