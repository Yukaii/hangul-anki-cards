# hangul-anki-cards

Create anki cards with the data from https://www.90daykorean.com/how-to-learn-the-korean-alphabet/

## Prerequisites

- anki-cli https://github.com/julien-sobczak/anki-cli
- jq
- curl
- bun

on macOS (`~/Library/Python/3.9/lib/python/site-packages/ankicli/loader.py`)

```diff
 def _open_collection(self):
   anki_collection_path = os.path.join(self.anki_dir, "collection.anki2")
   print("📂 Opening Anki collection...")
+  self.col = Collection(anki_collection_path)
-  self.col = Collection(anki_collection_path, log=True)
```

## Run

```bash
bun run start
```
