bundle exec middleman build
cd build
git add -A
git commit -m build
git push origin gh-pages
cd ..

