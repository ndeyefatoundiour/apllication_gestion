if [ -z "$1" ]; then 
    echo "usage : ./creationFichier.sh <nom_page>"
    exit 1
fi

nom=$1
document="src/pages/$nom"
fichier="$document/$nom.js"

mkdir -p "$document"

cat > "$fichier"  << EOF

export default function ${nom}() {
    return \`
            <h1>Bienvenue Ndeye Fatou</h1>
    \`;
}
EOF

echo "page creee"
