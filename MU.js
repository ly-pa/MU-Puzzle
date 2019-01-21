// MU problem

const collection = ['MI'];

console.log('MI');

function updateString(string) {
    document.getElementById("selectedString").value = string;
}

function updateWindow() {
    let message = '';
    for (let i = 0; i < collection.length; i++) {
        message +=
            ('<a href="#" onclick="updateString(\''
            + String(collection[i]) + '\')" />'
            + String(collection[i]) + '</a>, ');
    };
    return document.getElementById("collectionDiv").innerHTML
        = message.slice(0, message.length - 2);
}

function updates(string) {
    updateString(string);
    console.log(string);
    if (collection.includes(string) == false) { 
        collection.push(string);
        updateWindow();
    };
}

function empty() {
    collection = ['MI'];
    updateWindow();
	updateString('MI');
}

function rule1(string) {
/*  RULE I: If you possess a string whose last
    letter is I you can add on a U at the end.
    string = document.getElementById("selectedString").value */
    if (string[string.length - 1] == "I") {
        string += 'U';
        updates(string);
        return string;
    } else {
        return alert("Last letter is not I", string);
    }
}

function rule2(string) {
/*  RULE II: Suppose you have Mx.
    Then you may add Mxx to your collection. */
    if (string[0] == 'M') {
        string = 'M' + string.slice(1) + string.slice(1);
        updates(string);
        return string;
    } else {
        return alert("First letter is not M", string);
    }
}

function rule3(string) {
/*  RULE III: If III occurs in one of the
    strings in your collection, you may make
    a new string with U in place of III.

    If there is more than 3 IIIs in string,
    you can choose which ones to delete. */
    if (/I{4,}/g.test(string)) {
        x = Number(prompt("Index of IIIs (index no.s start at 0): ",
            string.indexOf('III')));
        if (string.indexOf(x) !== 'I') {
            return alert(`Index ${x} is not 'I'`)
        };
        string = (string.slice(0, x) + 'U' + string.slice(x + 3));
        updates(string);
        return string;
    } else if (/I{3}/g.test(string)) {
        string = (string.slice(0, string.indexOf('III'))
            + 'U' + string.slice(string.indexOf('III') + 3));
        updates(string);
        return string;
    } else {
        return alert("III not in string", string);
    }
}

function rule4(string) {
/*  RULE IV: If UU occurs inside one
    of your strings, you can drop it. */
    if (/U{3,}/g.test(string)) {
        x = Number(prompt("Index of UUs (index no.s start at 0): ",
                string.indexOf('UU')));
        if (string.indexOf(x) !== 'U') {
                return alert(`Index ${x} is not 'U'`)
            };
        string = (string.slice(0, x) + string.slice(x + 2));
        updates(string);
        return string;
    } else if (/U{2}/g.test(string)) {
        string = (string.slice(0, string.indexOf('UU'))
                + string.slice(string.indexOf('UU') + 2));
        updates(string);
        return string;
    } else {
        return alert("UU not in string", string);
    }
}