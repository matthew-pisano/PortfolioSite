import React, { Component } from 'react';
import { buildPage } from '../../scripts/pageBuilder';
import PropTypes from 'prop-types';
import { Wrapper } from '../../scripts/wrapper';

class ImageCrypt extends Component {

    static propTypes = {display: PropTypes.string};
    render() {
        let tiles = [
            {
                title: "#Overview",
                content: `<i>Image-Crypt</i> encodes documents into a target image file. Documents 
                    are encoded based off of noise inserted into a target image. The noise may 
                    optionally be generated based off of a key file to further obfuscate it using 
                    a hash-based encoding. The encoded document can be extracted from the image using
                    the same key file.`
            },
            {
                title: `CAUTION: This program is not cryptographically secure and should not be used to
                    encode sensitive information. If security is a concern, use a more secure encryption 
                    method before encoding the text into an image.`,
                style: {backgroundColor: "rgba(255,55,55,0.68)"}
            },
            {
                title: "Text Preprocessing",
                content: `To ensure that non-ASCII text can be losslessly encoded to and decoded from
                    images, base64 encoding is used to encode the text before it undergoes any obfuscation 
                    or is inserted into the image. The text is decoded after it undergoes any de-obfuscation
                     or is extracted from the image.`
            },
            {
                title: "Noise Generation",
                content: `Text is encoded into an image by inserting noise into the image. The noise is 
                    generated based off of the text to be encoded and an optional key file. If a key file 
                    is given, the raw text will first be obfuscated using the key before being encoded 
                    into the image. This encoding can only be performed on a 4-channel image (RGBA); 
                    if a three-channel image is given, the image will be converted to a four-channel image
                    by adding an alpha channel.
                    <br><br>
                    <b>Noise Generation</b>
                    <br><br>
                    The noise added to an image using one of three different bit widths. The bit width
                    determines the number of bits that will be used to encode the text into each pixel 
                    channel. The bit width can be set using the <i>-b</i> flag. The following bit widths are 
                    available: 1, 2, and 4.
                    <br><br>
                    First, each channel of each pixel is rounded down to the nearest multiple of the 
                    selected bit width's max value (2 for b.w. 1, 4 for b.w. 2, and 16 for b.w. 4). 
                    Next, the bits of each character are encoded into an image's pixels by adding <i>[0-bitWidth)</i> 
                    to it, depending on the bits within the character to be encoded.
                    <br><br>
                    For example, if the bit width is 2, each pixel channel will encode two bits of a 
                    character by adding <i>[0-4)</i> to the rounded down channel value. If the channel 
                    value is 100, the character value is <i>M (ASCII-77)</i>, the first two bits of M (<i>1001101</i>) 
                    are <i>01</i> (little-endian), so the channel value will be set to 101. The next channel will encode 
                    the next two bits of <i>1001101</i>: <i>11</i>. If the value of the next channel is 124, its new value will be 
                    127. With this bit width, each 4-channel pixel can encode a single, 1-byte character as each 
                    channel encodes 2-bits within its noise. The noise always stays within the space created by
                    the rounding, so the modulo of the value can be used to losslessly decode the text.
                    <br><br>
                    The resulting image appears nearly identical to the original, but with a small 
                    amount of noise added from the text encoding.`
            },
            {
                title: "Text Obfuscation",
                content: `To make the encoded text less obvious, it can be obfuscated using a key file. 
                    The key file's contents are hashed to generate a key that is used to obfuscate the text.
                    <br><br>
                    The following two hash-based obfuscation strategies are available:
                    <br><br>
                    <b>Full-Text Shifting</b>
                    <br><br>
                    Documents obfuscated with full-text shifting have had their bits shifted uniformly 
                    upward based off of the hash of the key. This helps to make the encoded text less 
                    obvious, but it is still possible to decode the text by brute-force guessing the shift value.
                    <br><br>
                    <b>Per-Character Shifting</b>
                    <br><br>
                    Documents obfuscated in this manner have each of their characters shifted based off of the 
                    combined hash of the character index and the key. This ensures that the contents cannot be 
                    decoded by simply guessing the shift value as each character may have a different shift. 
                    This method is more secure than full-text shifting, but it is still possible to decode 
                    the text by brute-force guessing keys with different hashes until the correct <i>hash % 128</i> is found.`
            },
        ];
        let pageInfo = {
            pageName: "personal/imageCrypt",
            holderStyle: {backgroundColor: "#63beca", borderRadius: "10px"},
            gitLink: "https://github.com/matthew-pisano/ImageCrypt",
            gitTitle: "ImageCrypt",
            tags: ["personal", "cpp"]
        };
        return (<Wrapper pageName={pageInfo.pageName}>
            <div id={pageInfo.pageName+"Page"} className="page container w3-rest lightText">
                <div className="inner titleCard">
                    <h1 style={{margin: "auto", width: "auto", textAlign: "center"}}><b>Image-Crypt</b></h1><br/>
                    <h3 style={{margin: "auto", width: "auto", textAlign: "center"}}>A image-based document encoder</h3>
                </div>
                {buildPage(pageInfo, tiles)}
            </div>
        </Wrapper>);
    }
}

export default ImageCrypt;