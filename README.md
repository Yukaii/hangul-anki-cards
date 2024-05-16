# hangul-anki-cards

Create anki cards with the data from https://www.90daykorean.com/how-to-learn-the-korean-alphabet/

## Prerequisites

- anki-cli https://github.com/julien-sobczak/anki-cli
- jq
- curl
- bun

You might need to patch the package manually when error happens.

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
# This should generate cards.yml at project root
bun run start


# macOS under /Users/$username/Library/Python/3.9/bin/anki-cli-unofficial
# Create a deck name Hangul to import
anki-cli-unofficial load cards.yaml  --media-dir audio_files --deck Hangul archive.apkg
```

### License

WTFPL
