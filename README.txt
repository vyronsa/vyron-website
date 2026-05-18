VYRON WEBSITE STATIC PRODUCT ROUTE FIX

Copy the folders/files into:
C:\Users\humres\vyron-website

This package fixes the 404 issue by creating REAL static routes:
app/software/core/page.tsx
app/software/reach/page.tsx
app/software/maint/page.tsx
app/software/cost/page.tsx
app/software/build/page.tsx
app/software/farm/page.tsx
app/software/recruit/page.tsx

It also preserves your uploaded homepage file exactly and only adds product page CSS to globals.css.

After copying, run:
cd C:\Users\humres\vyron-website
taskkill /IM node.exe /F
Remove-Item .next -Recurse -Force
npm install
npx next dev -p 3004
