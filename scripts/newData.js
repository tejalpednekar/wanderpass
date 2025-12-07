fetch ("https://raw.githubusercontent.com/ilyankou/passport-index-dataset/refs/heads/master/passport-index-matrix.csv")
 .then (response => response.text())
 .then (text => {
    const rows = text.split("\n").map(line => line.split(","));

    const header = rows[0];
    const row191 = rows[190];

    const jsonArray = header.slice(1).map((countryName, index) => {
        return { 
            country: countryName,
            visaRequired: row191[index + 1]
    }
});

    console.log(JSON.stringify(jsonArray, null, 2));
});