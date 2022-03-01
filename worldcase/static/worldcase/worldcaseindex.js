newcases = document.getElementById("g_today_c_cases");
totalcases = document.getElementById("g_total_c_cases");
newdeath = document.getElementById("g_today_d_cases");
totaldeath = document.getElementById("g_total_d_cases");
NewRecovered = document.getElementById("g_today_r_cases");
totalrecovered = document.getElementById("g_total_r_cases");
todays_date = document.getElementById("date_corona");

CountryCase = document.getElementById("countrycase");

fetch("https://api.covid19api.com/summary")
    .then(response => response.json())
    .then(rsp => {
        // console.log(rsp.Global);

        Countries_da = rsp.Countries;
        let Countriesdata = "";
        Countries_da.forEach(function (element, index) {
            // console.log(element, index)
            let data = `<tr>
                            <td> ${index + 1} </td>
                            <td> ${element["Country"]} </td>
                            <td> ${element["CountryCode"]} </td>
                            <td> ${element["NewConfirmed"]} </td>
                            <td> ${element["NewDeaths"]} </td>
                            <td> ${element["NewRecovered"]} </td>
                            <td> ${element["TotalConfirmed"]} </td>
                            <td> ${element["TotalDeaths"]} </td>
                            <td> ${element["TotalRecovered"]} </td>
                        </tr> `
            Countriesdata += data;
        });
        CountryCase.innerHTML = Countriesdata;


        let global_data = rsp.Global;
        // console.log(global_data["Date"]);
 
        todays_date.innerHTML = global_data["Date"].slice(0,10);

        newcases.innerHTML = global_data["NewConfirmed"];
        totalcases.innerHTML = global_data["TotalConfirmed"];
        newdeath.innerHTML = global_data["NewDeaths"];
        totaldeath.innerHTML = global_data["TotalDeaths"];
        NewRecovered.innerHTML = global_data["NewRecovered"];
        totalrecovered.innerHTML = "38953223";
    });