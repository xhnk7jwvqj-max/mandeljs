to serve mandel.js

[Blog Post](https://www.hgreer.com/JavascriptMandelbrot/)

[Live Mandelbrot Viewer](http://hastingsgreer.github.io/mandeljs/)

## Development

```bash
yarn
npx vite
```

## Deployment

The site uses relative paths and works automatically at any URL - no configuration needed!

### GitHub Pages Project Site (Default)

Push to `master` branch to deploy to `https://username.github.io/mandeljs/`

### Custom Domain Deployment

To deploy to a custom domain like `https://example.com/`:

#### Option A: Manual Trigger

1. Go to Actions tab in GitHub
2. Click "Build and Deploy" workflow
3. Click "Run workflow"
4. Enter your custom domain (e.g., `example.com`)
5. Click "Run workflow"

#### Option B: Set Repository Variable (Automatic)

1. Go to repository Settings → Secrets and variables → Actions → Variables
2. Add variable: `CUSTOM_DOMAIN` with your domain (e.g., `example.com`)
3. Push to master - CNAME file will be created automatically

#### Configure DNS

After deploying with custom domain:
1. Add a CNAME record in your DNS settings pointing to `username.github.io`
2. In GitHub repository settings, go to Pages and verify your custom domain

### Local Testing

```bash
yarn build
yarn preview
```
