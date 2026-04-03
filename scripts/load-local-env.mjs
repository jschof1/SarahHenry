import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export function loadLocalEnv(cwd = process.cwd()) {
  const filePaths = [
    resolve(cwd, '.env'),
    resolve(cwd, '.env.local'),
  ];

  const loadedValues = new Map();

  for (const filePath of filePaths) {
    if (!existsSync(filePath)) {
      continue;
    }

    const source = readFileSync(filePath, 'utf8');
    for (const rawLine of source.split(/\r?\n/)) {
      const line = rawLine.trim();
      if (!line || line.startsWith('#')) {
        continue;
      }

      const normalized = line.startsWith('export ') ? line.slice(7) : line;
      const separatorIndex = normalized.indexOf('=');
      if (separatorIndex === -1) {
        continue;
      }

      const key = normalized.slice(0, separatorIndex).trim();
      if (!key) {
        continue;
      }

      let value = normalized.slice(separatorIndex + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      loadedValues.set(key, value);
    }
  }

  for (const [key, value] of loadedValues) {
    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}
