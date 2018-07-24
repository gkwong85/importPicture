import mergeImg from 'merge-img';

mergeImg(['image-1.png', 'image-2.jpg'])
.then((img) => {
    // Save image as file
    img.write('out.png', () => console.log('done'));

    // Get image as `Buffer`
    img.getBuffer(img.getMIME(), (buf) => console.log(buf));
});