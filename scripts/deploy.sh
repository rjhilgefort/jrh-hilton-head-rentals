yarn run build
rm -rf live
mv build live
rsync -av -P -e "ssh -p 4444" live rjhilgefort@192.241.245.99:/home/rjhilgefort/www/hhi.hilgefort.me/
