#!/bin/bash

# Script to set up the 'dev' command alias

GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

PROJECT_DIR="/Users/owner/LOCAL WP WEBSITE AUG '25/mental-health-nextjs"

echo -e "${BLUE}Setting up 'dev' command for MentalCare project...${NC}"
echo ""

# Detect shell configuration file
if [ -f "$HOME/.zshrc" ]; then
    SHELL_CONFIG="$HOME/.zshrc"
    SHELL_NAME="zsh"
elif [ -f "$HOME/.bashrc" ]; then
    SHELL_CONFIG="$HOME/.bashrc"
    SHELL_NAME="bash"
elif [ -f "$HOME/.bash_profile" ]; then
    SHELL_CONFIG="$HOME/.bash_profile"
    SHELL_NAME="bash"
else
    echo -e "${YELLOW}⚠️  Could not detect shell configuration file${NC}"
    echo "Please add this alias manually to your shell config:"
    echo ""
    echo "alias dev='cd \"$PROJECT_DIR\" && ./dev'"
    exit 1
fi

# Check if alias already exists
if grep -q "alias dev=" "$SHELL_CONFIG" 2>/dev/null; then
    echo -e "${YELLOW}⚠️  'dev' alias already exists in $SHELL_CONFIG${NC}"
    echo "Updating it to point to this project..."
    # Remove old alias
    sed -i '' '/alias dev=/d' "$SHELL_CONFIG"
fi

# Add the alias
echo "" >> "$SHELL_CONFIG"
echo "# MentalCare Next.js Development Server" >> "$SHELL_CONFIG"
echo "alias dev='cd \"$PROJECT_DIR\" && ./dev'" >> "$SHELL_CONFIG"

echo -e "${GREEN}✅ Alias added successfully!${NC}"
echo ""
echo -e "${GREEN}To use the 'dev' command:${NC}"
echo "1. Reload your shell configuration:"
echo "   ${BLUE}source $SHELL_CONFIG${NC}"
echo ""
echo "2. Then simply type:"
echo "   ${BLUE}dev${NC}"
echo ""
echo "This will:"
echo "  • Navigate to the project directory"
echo "  • Start the Next.js development server"
echo "  • Automatically open http://localhost:3000 in your browser"