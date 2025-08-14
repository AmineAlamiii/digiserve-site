# Guide pour configurer votre favicon

## Pourquoi votre logo ne s'affiche pas dans Google ?

Google utilise principalement les formats `.ico` et `.png` pour afficher les favicons dans les résultats de recherche, pas les fichiers SVG.

## Comment générer vos favicons ?

### Option 1 : Utiliser un générateur en ligne (Recommandé)

1. **Allez sur** : https://realfavicongenerator.net/
2. **Uploadez** votre logo (format PNG ou JPG, minimum 260x260px)
3. **Configurez** les options selon vos préférences
4. **Générez** les favicons
5. **Téléchargez** le package complet
6. **Remplacez** les fichiers dans le dossier `public/` :
   - `favicon.ico`
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png`

### Option 2 : Utiliser Figma ou Photoshop

1. **Créez** votre logo en 512x512px
2. **Exportez** en différentes tailles :
   - 16x16px → `favicon-16x16.png`
   - 32x32px → `favicon-32x32.png`
   - 180x180px → `apple-touch-icon.png`
   - 16x16px en ICO → `favicon.ico`

### Option 3 : Utiliser des outils en ligne

- **Favicon.io** : https://favicon.io/
- **Favicon Generator** : https://www.favicon-generator.org/

## Tailles recommandées

| Fichier | Taille | Usage |
|---------|--------|-------|
| `favicon.ico` | 16x16, 32x32 | Navigateurs classiques |
| `favicon-16x16.png` | 16x16 | Navigateurs modernes |
| `favicon-32x32.png` | 32x32 | Navigateurs modernes |
| `apple-touch-icon.png` | 180x180 | iOS Safari |
| `android-chrome-192x192.png` | 192x192 | Android Chrome |
| `android-chrome-512x512.png` | 512x512 | Android Chrome |

## Conseils pour un bon favicon

1. **Simplicité** : Votre logo doit être reconnaissable même en très petite taille
2. **Contraste** : Assurez-vous qu'il soit visible sur fond blanc
3. **Couleurs** : Utilisez des couleurs vives et contrastées
4. **Forme** : Évitez les détails trop fins qui disparaissent en petit

## Test de votre favicon

1. **Déployez** votre site
2. **Attendez** 24-48h pour que Google indexe les changements
3. **Testez** dans Google Search Console
4. **Vérifiez** avec l'outil de test de favicon de Google

## Vérification

Après avoir remplacé les fichiers, votre favicon devrait s'afficher :
- Dans l'onglet du navigateur
- Dans les favoris
- Dans les résultats Google (après quelques jours)
- Sur mobile (iOS/Android)

## Support

Si vous avez des problèmes, vérifiez :
- Les fichiers sont bien dans le dossier `public/`
- Les chemins dans `index.html` sont corrects
- Le format des fichiers est valide
- Le cache du navigateur est vidé 