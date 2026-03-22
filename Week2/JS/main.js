//JSON object
const singers = [
    {
        name: "BBNO$",
        dob: "6/30/1995",
        songs: "1-800, edamame, two"
    },
    {
        name: "Yung Gravy",
        dob: "3/19/1996",
        songs: "C'est La Vie, Betty, oops!"
    },
    {
        name: "Ashnikko",
        dob: "2/19/1996",
        songs: "Paint The Town Blue, Slumber Party, Daisy"
    },
    {
        name: "Doja Cat",
        dob: "10/21/1995",
        songs: "Need To Know, You Right, Kiss Me More"
    }
];

const table = document.getElementById("singerTable");

singers.forEach(singer => {
    let row = `
        <tr>
            <td>${singer.name}</td>
            <td>${singer.dob}</td>
            <td>${singer.songs}</td>
        </tr>
    `;
    table.innerHTML += row;
});
