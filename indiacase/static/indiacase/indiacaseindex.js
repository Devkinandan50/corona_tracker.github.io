newcases = document.getElementById("i_today_c_cases");
newdeath = document.getElementById("i_today_d_cases");
NewRecovered = document.getElementById("i_today_r_cases");
todays_date = document.getElementById("date_corona");

stateCase = document.getElementById("statecase");

fetch("https://api.rootnet.in/covid19-in/stats/latest")
    .then(response => response.json())
    .then(rsp => {
        // console.log(rsp.data.summary);
        // console.log(rsp.lastRefreshed);
        totalcountrycase = rsp.data.summary;

        state_da = rsp.data.regional;
        let states_data = "";
        state_da.forEach(function (element, index) {
            // console.log(element, index)
            let data = `<tr>
                            <td> ${index + 1} </td>
                            <td> ${element["loc"]} </td>
                            <td> ${element["confirmedCasesIndian"]} </td>
                            <td> ${element["confirmedCasesForeign"]} </td>
                            <td> ${element["totalConfirmed"]} </td>
                            <td> ${element["deaths"]} </td>
                            <td> ${element["discharged"]} </td>
                        </tr> `
            states_data += data;
        });
        stateCase.innerHTML = states_data;


        todays_date.innerHTML = rsp.lastRefreshed.slice(0,10);

        newcases.innerHTML = totalcountrycase["total"];
        newdeath.innerHTML = totalcountrycase["deaths"];
        NewRecovered.innerHTML = totalcountrycase["discharged"];
    });