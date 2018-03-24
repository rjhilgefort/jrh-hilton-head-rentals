echo "Building and deploying ..."

# build first so if something is wrong, we don't replace things
npm run build

# So we can run when nothing exists
mkdir live
mkdir live-1
mkdir live-2

# Replace with new versions and drop last
rm -rf live-2
mv live-1 live-2
mv live live-1
mv build live

echo "... deployed successfully, oldest version dropped."
