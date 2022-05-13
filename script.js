const input = document.querySelector("#input");
const button = document.querySelector(".input button");


let requestHeaders = {
    "Content-Type": "application/json",
    "apikey": "99999945c622440cb27ad5121418168d",
}


async function writeToUI() {

    var link = await input.value;

    console.log(link);

    let linkRequest = {
        destination: link,
        domain: { fullName: "rebrand.ly" }
        //, slashtag: "A_NEW_SLASHTAG"
        //, title: "Rebrandly YouTube channel"
    }

    $.ajax({
        url: "https://api.rebrandly.com/v1/links",
        type: "post",
        data: JSON.stringify(linkRequest),
        headers: requestHeaders,
        dataType: "json",
        success: (link) => {
            input.value = link.shortUrl;
            console.log(`Long URL was ${link.destination}, short URL is ${link.shortUrl}`);
        }
    });


}

button.addEventListener("click", writeToUI);