## Setting Up TypeScript and ts-node

### 1. Install TypeScript Compiler

```bash
npm install -g typescript
```

### 2. Install ts-node

```bash
npm install -g ts-node
```

### 3. Set PATH Environment Variable (Windows Only)

- Edit your user variable `PATH` to add:
  ```
  %APPDATA%\Roaming\npm
  ```
- Open a new command prompt and verify installation:
  ```bash
  tsc -v
  ts-node -v
  ```

### 4. Compile TypeScript Files

```bash
tsc <filename>.ts
```

- This generates a corresponding JavaScript file.

### 5. Create a TypeScript Configuration File

```bash
tsc --init
```

### 6. Configure Root and Output Directories

- Edit `tsconfig.json` to set `"rootDir"` and `"outDir"` as needed.

### 7. Build TypeScript Project

```bash
tsc
```

- Compiles and generates JavaScript files under the configured output directory.

### 8. Configure `package.json` Scripts

Add the following scripts (either one) to your `package.json`:

```json
"scripts": {
  "build": "tsc",
  "start": "node out/main.js"
}
```

```json
"scripts": {
  "build": "tsc",
  "start": "ts-node src/main.ts"
}
```

### 9. Run Build and Start Commands

```bash
npm run build
npm run start
```

### 10. Verify the Output

- Check the generated JavaScript files and application output to confirm successful compilation and execution.
