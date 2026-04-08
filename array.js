
Array.zeros = function (s) {
    var f = function (s, d) {
        var a = new Array(s[d]);
        if (d == s.length - 1) {
            for (var i = 0; i < s[d]; i++) a[i] = 0;
        } else {
            for (var i = 0; i < s[d]; i++) a[i] = f(s, d + 1);
        }
        return a;
    };
    return f(s, 0);
}
