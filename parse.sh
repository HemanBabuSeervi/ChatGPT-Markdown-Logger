ROOT="$HOME/notes"
pandoc "$1".md -o "$1-temp".html
cp "$ROOT/header.html" "$1".html
cat "$1-temp".html >> "$1".html
cat "$ROOT/footer.html" >> "$1".html
rm -f "$1-temp".html
