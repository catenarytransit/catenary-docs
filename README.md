# catenary-docs

Code for Catenary Docs website (information for new users, contributors, and other members of the community who want to learn more about the nitty-gritty technical stuff!

## Contributing

For information about how the documentation sources are structured, see [contributing/nontechnical/docs](https://docs.catenarymaps.org/contributing/nontechnical/docs).

### Dependencies

First install `nvm`:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

Close and reopen your terminal. 

```bash
# Install Node.js
nvm install --lts
nvm use --lts

# Verify that the version activated is the version you installed
node -v
nvm current

# Install bun, a package manager
curl -fsSL https://bun.sh/install | bash
```

And we can install our dependencies:
```bash
bun install
```

### Testing

Locally serve the website:

```bash
bun dev
```

