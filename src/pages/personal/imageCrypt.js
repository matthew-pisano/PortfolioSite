import {genPageTitle} from "@/lib/utils";
import React from 'react';
import {GitLink, PageInfo, SectionTile, Tile, TileLink} from '@/lib/pageBuilder';
import DefaultWrapper from "@/components/DefaultWrapper";


export default function ImageCrypt() {

    let tiles = [
        new Tile(
            "<h2>Overview</h2>",
            `<i>Image-Crypt</i> encodes any arbitrary byte sequence into a target image file. This 
                is performed by adding small perturbations to the pixel values within an image. The noise may 
                optionally be generated based off of a key file to further obfuscate it using 
                a hash-based encoding. The encoded document can be extracted from the image using
                the same key file.`,
            "/media/image/secret-message.png",
        ),
        new SectionTile(
            `CAUTION: This program is not cryptographically secure and should not be used to
                encode sensitive information. If security is a concern, use a more secure encryption 
                method before encoding secrets into an image.`,
            {backgroundColor: "rgba(255,55,55,0.68)"}
        ),
        new Tile(
            "Data Preprocessing",
            `To ensure that non-ASCII text can be losslessly encoded to and decoded from
                images, base64 encoding is used to encode the data before it undergoes any obfuscation 
                or is inserted into the image. It is decoded after it undergoes any de-obfuscation
                and is extracted from the image.`
        ),
        new Tile(
            "Noise Generation",
            `Data is encoded into an image by inserting noise into the image. The noise is 
                generated based off of the text to be encoded and an optional key file. If a key file 
                is given, the raw data will first be obfuscated using the key before being encoded 
                into the image. This encoding can only be performed on a 4-channel image (RGBA); 
                if a three-channel image is given, the image will be converted to a four-channel image
                by adding an alpha channel.
                <br><br>
                <b>Noise Generation</b>
                <br><br>
                The noise added to an image using one of three different bit widths. The bit width
                determines the number of bits that will be used to encode the data into each pixel 
                channel. The bit width can be set using the <code>-b</code> flag. The following bit widths are 
                available: 1, 2, and 4.  Higher bit widths can encode more data into an image, but
                they will also make the encoded data more obvious.
                <br><br>
                First, each channel of each pixel is rounded down to the nearest multiple of the 
                selected bit width's max value (2 for b.w. 1, 4 for b.w. 2, and 16 for b.w. 4). 
                Next, the bits of each character are encoded into an image's pixels by adding <code>[0-bitWidth)</code> 
                to it, depending on the bits within the character to be encoded.
                <br><br>
                For example, if the bit width is 2, each pixel channel will encode two bits of a 
                character by adding <code>[0-4)</code> to the rounded down channel value. If the channel 
                value is 100, the character value is <code>M (ASCII-77)</code>, the first two bits of M (<code>1001101</code>) 
                are <code>01</code> (little-endian), so the channel value will be set to 101. The next channel will encode 
                the next two bits of <code>1001101</code>: <code>11</code>. If the value of the next channel is 124, its new value will be 
                127. With this bit width, each 4-channel pixel can encode a single, 1-byte character as each 
                channel encodes 2-bits within its noise. The noise always stays within the space created by
                the rounding, so the modulo of the value can be used to losslessly decode the text.
                <br><br>
                The resulting image appears nearly identical to the original, but with a small 
                amount of noise added from the text encoding.`
        ),
        new Tile(
            "Data Obfuscation",
            `To make the encoded data less obvious, it can be obfuscated using a key file. 
                The key file's contents are hashed to generate a key that is used for obfuscation.
                <br><br>
                The following two hash-based obfuscation strategies are available:
                <br><br>
                <b>Full-Sequence Shifting</b>
                <br><br>
                Plain-text documents that are obfuscated with full-text shifting have had their bits shifted uniformly 
                upward based off of the hash of the key. This helps to make the encoded text less 
                obvious, but it is still possible to decode the text by brute-force guessing the shift value.
                The same principle is applied to all arbitrary byte sequences.
                <br><br>
                <b>Byte-Wise Shifting</b>
                <br><br>
                Documents obfuscated in this manner have each of their characters shifted based off of 
                the combined hash of the character index and the character of the key at that index. 
                <br><br>
                For example, if encoding the fourth character of <code>hello world</code> using the key <code>secret</code>, 
                the character <code>o</code> would be shifted by the <code>hash % 128</code> of <code>e4</code>, since <code>e</code> is the 
                fourth character of the key (zero indexed).
                <br><br>
                This ensures that the contents cannot be decoded by simply guessing the shift value as 
                each character may have a different shift.  This method is more secure than full-text shifting, 
                as it cannot be trivially brute forced by just guessing one <code>[0-128]</code> value.  Since hashes 
                cannot be easily reversed, using simple frequency analysis to decode the text is likely 
                not feasible.  However, such a simple algorithm can likely be cracked with enough effort, 
                so using a more secure encryption method before encoding the text is recommended if security is a concern.`
        ),
    ];
    let pageInfo = new PageInfo(
        genPageTitle(__filename),
        "Image-Crypt",
        "An image-based document encoder",
        {backgroundColor: "#62a8a2"},
        ["personal", "cpp"],
        [new GitLink("https://github.com/matthew-pisano/ImageCrypt", "ImageCrypt")]
    );
    return <DefaultWrapper pageInfo={pageInfo} tiles={tiles}/>;
}
