# Portfolio - Marc Milliot

Un portfolio web moderne et interactif présentant mes projets et compétences en développement.

## À propos

Portfolio personnel conçu pour présenter mon parcours de développeur junior, mes projets techniques et mes coordonnées professionnelles. Le site offre une expérience utilisateur fluide avec des animations soignées et un design moderne.

## Technologies utilisées

### Frontend
- **HTML5** - Structure sémantique
- **CSS3** - Styling avancé avec animations et effets de gradient
- **TypeScript** - JavaScript typé pour plus de robustesse

### Outils de développement
- **Vite** - Bundler moderne et serveur de développement ultra-rapide
- **Rolldown** - Optimisation et build de production
- **PostCSS** - Traitement CSS

## Fonctionnalités

### Interface utilisateur
- Design dark theme avec dégradés animés
- Animations fluides et effets de transition
- Responsive design (mobile, tablette, desktop)
- Glass-morphism et effets de blur

### Carousel de projets
Navigation interactive présentant 4 projets :
- **Portfolio Terminal** - Portfolio interactif façon terminal
- **TICFE Assist** - Application web de remboursement TICFE
- **Minishell** - Implémentation d'un shell en C
- **IRC** - Serveur IRC complet (RFC 1459)

### Navigation
- Boutons de navigation prev/next pour le carousel
- Bouton scroll-to-top avec apparition dynamique
- Liens vers email, LinkedIn et GitHub

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/NaYruk/contact_project.git

# Installer les dépendances
npm install
```

## Utilisation

```bash
# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build

# Preview du build de production
npm run preview
```

## Structure du projet

```
contact_project/
├── src/
│   ├── script.ts       # Logique interactive (carousel, scroll)
│   └── styles.css      # Styles et animations
├── public/
│   ├── imgs/           # Images des projets
│   └── fonts/          # Polices personnalisées
├── index.html          # Point d'entrée
├── package.json        # Dépendances et scripts
└── tsconfig.json       # Configuration TypeScript
```

## Configuration TypeScript

- Target: **ES2022**
- Module: **ESNext**
- Strict mode activé
- Support DOM complet

## Responsive Design

Le site s'adapte automatiquement aux différentes tailles d'écran :
- **Desktop** : 900px et plus
- **Tablette** : 768px - 900px
- **Mobile** : moins de 768px

## Contact

- **Email** : marc.milliot29@gmail.com
- **LinkedIn** : [linkedin.com/in/mmilliot](https://www.linkedin.com/in/mmilliot/)
- **GitHub** : [github.com/NaYruk](https://github.com/NaYruk)

## Licence

Ce projet est un portfolio personnel.

---

*Développé avec passion par Marc Milliot*
