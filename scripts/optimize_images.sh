#!/bin/bash

# Directory to process
INPUT_DIR="assets"

# Quality (0-100)
QUALITY=80

echo "Starting WebP conversion in $INPUT_DIR..."

# Check if INPUT_DIR exists
if [ ! -d "$INPUT_DIR" ]; then
    echo "Error: Directory $INPUT_DIR not found."
    exit 1
fi

# Find all png, jpg, jpeg files
# Using -print0 and read -d '' to safely handle spaces and special chars
find "$INPUT_DIR" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) -print0 | while IFS= read -r -d '' img; do
    # Define output filename
    webp_path="${img%.*}.webp"
    
    # Skip if webp already exists and is newer than source
    if [ -f "$webp_path" ] && [ "$webp_path" -nt "$img" ]; then
        echo "⏩ Skipping (already up to date): $img"
        continue
    fi

    # Convert using cwebp
    # Use -quiet to suppress standard output
    cwebp -q $QUALITY "$img" -o "$webp_path" -quiet
    
    if [ $? -eq 0 ]; then
        echo "✅ Converted: $img -> $webp_path"
    else
        echo "❌ Failed: $img"
    fi
done

echo "Conversion complete."
