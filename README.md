# Yizzy Beats website

A professional, responsive, static website for showcasing and selling beats. It is ready to upload to GitHub Pages.

## Included
- Dark premium design with lime accents
- Five featured beat slots
- Audio preview buttons (once audio paths are added)
- Cover artwork support
- Contact links for email, Instagram, and phone
- Banner inviting visitors to contact you for more beats
- Mobile-friendly layout

## Add your beats and covers

1. Open `script.js` in a text editor (Notepad is fine).
2. Find the `const beats = [` section near the top.
3. For each slot, change `title`, `type`, and `price`.
4. Put audio files in `assets/beats/` and cover images in `assets/covers/`.
5. Add the filenames to the matching beat entry, for example:

```js
{
  title: "Midnight Drive",
  type: "Melodic Trap · 142 BPM",
  price: "From €30",
  audio: "assets/beats/midnight-drive.mp3",
  cover: "assets/covers/midnight-drive.jpg"
}
```

Use empty strings (`""`) if you haven't added a file yet. Keep filenames simple, without unusual characters. Common formats are MP3 for audio and JPG/PNG/WebP for cover art.

## Publish with GitHub Pages

1. Sign in at https://github.com/
2. Click **New repository** and name it `yizzy-beats`.
3. Choose **Public**, then create the repository.
4. Upload the contents of this folder (the files `index.html`, `style.css`, `script.js`, `README.md`, and the `assets` folder) to the repository's root. Do not upload only the ZIP file.
5. In the repository, open **Settings → Pages**.
6. Under build/deployment, select **Deploy from a branch**.
7. Select branch **main** and folder **/(root)**, then save.
8. Wait a few minutes. GitHub will show the website URL in the Pages section.

## Contact details included
- Email: Yizzybeats1@gmail.com
- Instagram: https://www.instagram.com/yizzy.beats/
- Phone link: +33 06 12 94 77 24

## Important
This is a website template; it does not yet process payments or automatically deliver licensed beat files. Customers can contact you to arrange the price, license, and delivery. You can later add a payment/checkout service if you want to sell directly online.
