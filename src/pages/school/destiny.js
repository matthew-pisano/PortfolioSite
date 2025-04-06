import React from "react";

import DefaultWrapper from "@/components/DefaultWrapper";
import { GalleryTile, GitLink, PageInfo, Tile, TileLink } from "@/lib/pageBuilder";
import { genPageTitle } from "@/lib/utils";

export default function Destiny() {
    let tiles = [
        new Tile(
            <h2>Overview</h2>,
            (
                <>
                    <i>Manifest Destiny</i> is a population growth simulator. It is based on a cellular automata model
                    of the United States during its period of rapid Westward expansion from 1763 to 1863. It is
                    implemented in C and uses MPI for both parallel processing and parallel I/O. Additionally, it uses
                    CUDA to leverage the power of GPUs for the simulation.
                </>
            )
        ),
        new GalleryTile(
            <>Simulation Details</>,
            (
                <>
                    Our simulation uses a 2D cellular automata model of the United States. Each cell represents a square
                    area of land about 3 square miles in size, splitting the continental United States into a
                    rectangular grid of over 619,000 cells. One iteration over all of these cells equates to
                    approximately 36 days, giving us 1000 iterations to represent the 100 years of expansion. Each
                    cell's new population is calculated using a combination of the current population, the population of
                    neighboring cells, a cell's surrounding resources, and a random factor.
                </>
            ),
            "/media/image/1763-timelapse.gif"
        ),
        new GalleryTile(
            <>Cell Resources</>,
            (
                <>
                    Each cell represents an 8 dimensional vector of attributes. These are a cell's elevation, surface
                    gradient, water attractiveness, temperature, annual precipitation, mineral wealth, biome, and
                    population. When calculating a cell's new growth, the population and neighboring water
                    attractiveness is taken into account. We preprocessed visual map data to obtain each of these static
                    attributes, excluding population, which is the only dynamically calculated attribute.
                </>
            ),
            "/media/image/manifest-preprocessing.png"
        ),
        new Tile(
            <>Comparison to Census Data</>,
            (
                <>
                    The following table contains historical census data of several American cities, as well as the
                    United States as a whole, compared with the results that our simulation produced for those areas.
                    <br />
                    <br />
                    <table style={{ borderCollapse: "collapse", margin: "auto" }}>
                        <tbody>
                            <tr>
                                <th className="tabCell">Location</th>
                                <th className="tabCell">Census</th>
                                <th className="tabCell">Simulated</th>
                                <th className="tabCell">Difference</th>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td className="tabCell">U.S. Total</td>
                                <td className="tabCell">31,443,321</td>
                                <td className="tabCell">33,778,227</td>
                                <td className="tabCell">+7.426%</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td className="tabCell">New Orleans</td>
                                <td className="tabCell">168,000</td>
                                <td className="tabCell">162,537</td>
                                <td className="tabCell">-3.25%</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td className="tabCell">New York</td>
                                <td className="tabCell">1,080,000</td>
                                <td className="tabCell">510,165</td>
                                <td className="tabCell">-52.76%</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td className="tabCell">San Francisco Bay</td>
                                <td className="tabCell">68,714</td>
                                <td className="tabCell">21,735</td>
                                <td className="tabCell">-68.37%</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    Notably, the significant population deficits shown in coastal cities like New York and San Francisco
                    can be almost entirely accounted for by large waves of immigration occurring between 1850 and 1863,
                    namely the Irish Potato Famine and the sudden influx of Chinese immigrants during the Qing dynasty's
                    internal crisis of that time.
                </>
            )
        ),
        new Tile(
            <>Parallelization</>,
            (
                <>
                    Our simulation can also take advantage of high-performance computing resources to run simulations in
                    a fraction of the time it would take to run serially. We can simulate 1000 simulation iterations in
                    less than two seconds when utilizing 4 MPI ranks with 4 GPUs.
                </>
            )
        )
    ];
    let pageInfo = new PageInfo(
        genPageTitle(__filename),
        "Manifest Destiny",
        "A cellular automata population growth simulator",
        { backgroundColor: "#5cafb6" },
        ["academic", "clang", "cuda", "collab"],
        [
            new GitLink("https://github.com/matthew-pisano/ManifestDestiny", "ManifestDestiny"),
            new TileLink(
                "https://github.com/matthew-pisano/ManifestDestiny/blob/master/docs/manifest-destiny-report.pdf",
                "Research Paper"
            )
        ]
    );
    return <DefaultWrapper pageInfo={pageInfo} tiles={tiles} />;
}
