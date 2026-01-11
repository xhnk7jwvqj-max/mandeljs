to serve mandel.js

[Blog Post](https://www.hgreer.com/JavascriptMandelbrot/)

[Live Mandelbrot Viewer](http://hastingsgreer.github.io/mandeljs/)

## Development

```bash
yarn
npx vite
```

## Deployment

This project supports two deployment modes:

### 1. GitHub Pages Project Site (username.github.io/mandeljs)

**Default mode** - Deploys to `https://username.github.io/mandeljs/`

The workflow automatically uses this mode when pushing to the `master` branch.

No configuration needed - just push to master!

### 2. Custom Domain Deployment

Deploys to a custom domain like `https://example.com/`

#### Option A: Manual Trigger (Recommended for testing)

1. Go to Actions tab in GitHub
2. Click "Build and Deploy" workflow
3. Click "Run workflow"
4. Select "custom_domain" as deployment type
5. Enter your custom domain (e.g., `example.com`)
6. Click "Run workflow"

#### Option B: Set Repository Variables (Automatic)

1. Go to repository Settings → Secrets and variables → Actions → Variables
2. Add the following variables:
   - `DEPLOYMENT_TYPE`: Set to `custom_domain`
   - `CUSTOM_DOMAIN`: Set to your domain (e.g., `example.com`)
3. Push to master - it will automatically deploy with custom domain settings

#### Configure DNS

After deploying with custom domain:
1. Add a CNAME record in your DNS settings pointing to `username.github.io`
2. In GitHub repository settings, go to Pages and verify your custom domain

### Local Testing

To test the build locally with different base paths:

```bash
# Test with project site base path
BASE_PATH='/mandeljs/' yarn build
yarn preview

# Test with custom domain (root path)
BASE_PATH='/' yarn build
yarn preview
```
