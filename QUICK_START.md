# 🚀 DÉMARRAGE RAPIDE - 5 MINUTES

## Étape 1 : Setup Initial (2 min)

```bash
# Créer le projet
npx create-next-app@latest clement-portfolio
cd clement-portfolio

# Installer les dépendances
npm install framer-motion lucide-react react-hook-form
```

## Étape 2 : Copier les Fichiers (2 min)

**Copie TOUS les fichiers depuis `/portfolio-clement/` dans ton projet :**

### Remplacer complètement :
- `app/layout.tsx`
- `app/globals.css`
- `tailwind.config.ts`
- `tsconfig.json`
- `next.config.js`
- `package.json` (ou merge les dependencies)

### Créer si absent :
- `postcss.config.js`
- `.gitignore`

### Copier le dossier :
- `components/` → Tous les .tsx

### Créer :
- `app/page.tsx`

## Étape 3 : Lancer (30 sec)

```bash
npm run dev
```

Ouvre http://localhost:3000

## Étape 4 : Personnaliser (30 min)

1. **Contact email** : `components/Contact.tsx` ligne 116
2. **Liens sociaux** : `components/Footer.tsx` lignes 19-30
3. **Images portfolio** : Ajoute dans `/public/images/`
4. **Ton histoire** : `components/About.tsx` lignes 22-60

## Étape 5 : Déployer (2 min)

```bash
# Push sur GitHub
git init
git add .
git commit -m "Initial commit"
git push

# Deploy sur Vercel
# → vercel.com → Import Project → Select Repo → Deploy
```

✅ **FAIT !** Ton site est live.

---

## Problèmes Courants

**Erreur "Module not found" ?**
→ Run `npm install` à nouveau

**Animations lag sur mobile ?**
→ Normal en dev mode, teste en production (`npm run build` puis `npm start`)

**Formulaire ne marche pas ?**
→ C'est normal, il est en mode simulation. Pour l'activer, voir README.md section "Formulaire de Contact"

---

## Next Steps

- [ ] Teste sur mobile
- [ ] Ajoute tes vrais projets/images
- [ ] Configure Analytics
- [ ] Achète ton domaine
- [ ] Commence la prospection !

**Questions ?** → Lis le README.md complet
