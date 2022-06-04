let champions = [
    {champion: "Androxus", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/androxus.jpg", role: "flank", ban: false},
    {champion: "Ash", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/ash.jpg", role: "tank", ban: false},
    {champion: "Atlas", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/atlas.jpg", role: "tank", ban: false},
    {champion: "Azaan", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/azaan.jpg", role: "tank", ban: false},
    {champion: "Barik", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/barik.jpg", role: "tank", ban: false},
    {champion: "Betty", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/betty-la-bomba.jpg", role: "damage", ban: false},
    {champion: "Bomb King", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/bomb-king.jpg", role: "damage", ban: false},
    {champion: "Buck", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/buck.jpg", role: "flank", ban: false},
    {champion: "Cassie", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/cassie.jpg", role: "damage", ban: false},
    {champion: "Corvus", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/corvus.jpg", role: "support", ban: false},
    {champion: "Dredge", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/dredge.jpg", role: "damage", ban: false},
    {champion: "Drogoz", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/drogoz.jpg", role: "damage", ban: false},
    {champion: "Evie", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/evie.jpg", role: "flank", ban: false},
    {champion: "Fernando", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/fernando.jpg", role: "tank", ban: false},
    {champion: "Furia", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/furia.jpg", role: "support", ban: false},
    {champion: "Grohk", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/grohk.jpg", role: "support", ban: false},
    {champion: "Grover", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/grover.jpg", role: "support", ban: false},
    {champion: "Imani", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/imani.jpg", role: "damage", ban: false},
    {champion: "Inara", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/inara.jpg", role: "tank", ban: false},
    {champion: "Io", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/io.jpg", role: "support", ban: false},
    {champion: "Jenos", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/jenos.jpg", role: "support", ban: false},
    {champion: "Khan", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/khan.jpg", role: "tank", ban: false},
    {champion: "Kinessa", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/kinessa.jpg", role: "damage", ban: false},
    {champion: "Koga", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/koga.jpg", role: "flank", ban: false},
    {champion: "Lex", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/lex.jpg", role: "flank", ban: false},
    {champion: "Lian", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/lian.jpg", role: "damage", ban: false},
    {champion: "Lilith", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/lillith.jpg", role: "support", ban: false},
    {champion: "Maeve", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/maeve.jpg", role: "flank", ban: false},
    {champion: "Makoa", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/makoa.jpg", role: "tank", ban: false},
    {champion: "Mal'Damba", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/maldamba.jpg", role: "support", ban: false},
    {champion: "Moji", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/moji.jpg", role: "flank", ban: false},
    {champion: "Octavia", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/octavia.jpg", role: "damage", ban: false},
    {champion: "Pip", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/pip.jpg", role: "support", ban: false},
    {champion: "Raum", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/raum.jpg", role: "tank", ban: false},
    {champion: "Rei", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/rei.jpg", role: "support", ban: false},
    {champion: "Ruckus", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/ruckus.jpg", role: "tank", ban: false},
    {champion: "Saati", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/saati.jpg", role: "damage", ban: false},
    {champion: "Seris", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/seris.jpg", role: "support", ban: false},
    {champion: "Sha'Lin", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/sha-lin.jpg", role: "damage", ban: false},
    {champion: "Skye", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/skye.jpg", role: "flank", ban: false},
    {champion: "Strix", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/strix.jpg", role: "damage", ban: false},
    {champion: "Talus", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/talus.jpg", role: "flank", ban: false},
    {champion: "Terminus", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/terminus.jpg", role: "tank", ban: false},
    {champion: "Tiberius", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/tiberius.jpg", role: "damage", ban: false},
    {champion: "Torvald", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/torvald.jpg", role: "tank", ban: false},
    {champion: "Tyra", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/tyra.jpg", role: "damage", ban: false},
    {champion: "Vatu", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/vatu.jpg", role: "flank", ban: false},
    {champion: "VII", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/vii.jpg", role: "flank", ban: false},
    {champion: "Viktor", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/viktor.jpg", role: "damage", ban: false},
    {champion: "Vivian", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/vivian.jpg", role: "damage", ban: false},
    {champion: "Vora", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/vora.jpg", role: "flank", ban: false},
    {champion: "Willo", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/willo.jpg", role: "damage", ban: false},
    {champion: "Yagorath", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/yagorath.jpg", role: "tank", ban: false},
    {champion: "Ying", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/ying.jpg", role: "support", ban: false},
    {champion: "Zhin", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/zhin.jpg", role: "flank", ban: false}
]

let available = [
    {champion: "Androxus", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/androxus.jpg"},
    {champion: "Ash", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/ash.jpg"},
    {champion: "Atlas", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/atlas.jpg"},
    {champion: "Azaan", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/azaan.jpg"},
    {champion: "Barik", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/barik.jpg"},
    {champion: "Betty", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/betty-la-bomba.jpg"},
    {champion: "Bomb King", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/bomb-king.jpg"},
    {champion: "Buck", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/buck.jpg"},
    {champion: "Cassie", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/cassie.jpg"},
    {champion: "Corvus", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/corvus.jpg"},
    {champion: "Dredge", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/dredge.jpg"},
    {champion: "Drogoz", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/drogoz.jpg"},
    {champion: "Evie", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/evie.jpg"},
    {champion: "Fernando", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/fernando.jpg"},
    {champion: "Furia", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/furia.jpg"},
    {champion: "Grohk", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/grohk.jpg"},
    {champion: "Grover", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/grover.jpg"},
    {champion: "Imani", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/imani.jpg"},
    {champion: "Inara", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/inara.jpg"},
    {champion: "Io", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/io.jpg"},
    {champion: "Jenos", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/jenos.jpg"},
    {champion: "Khan", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/khan.jpg"},
    {champion: "Kinessa", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/kinessa.jpg"},
    {champion: "Koga", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/koga.jpg"},
    {champion: "Lex", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/lex.jpg"},
    {champion: "Lian", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/lian.jpg"},
    {champion: "Lilith", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/lillith.jpg"},
    {champion: "Maeve", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/maeve.jpg"},
    {champion: "Makoa", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/makoa.jpg"},
    {champion: "Mal'Damba", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/maldamba.jpg"},
    {champion: "Moji", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/moji.jpg"},
    {champion: "Octavia", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/octavia.jpg"},
    {champion: "Pip", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/pip.jpg"},
    {champion: "Raum", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/raum.jpg"},
    {champion: "Rei", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/rei.jpg"},
    {champion: "Ruckus", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/ruckus.jpg"},
    {champion: "Saati", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/saati.jpg"},
    {champion: "Seris", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/seris.jpg"},
    {champion: "Sha'Lin", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/sha-lin.jpg"},
    {champion: "Skye", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/skye.jpg"},
    {champion: "Strix", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/strix.jpg"},
    {champion: "Talus", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/talus.jpg"},
    {champion: "Terminus", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/terminus.jpg"},
    {champion: "Tiberius", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/tiberius.jpg"},
    {champion: "Torvald", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/torvald.jpg"},
    {champion: "Tyra", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/tyra.jpg"},
    {champion: "Vatu", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/vatu.jpg"},
    {champion: "VII", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/vii.jpg"},
    {champion: "Viktor", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/viktor.jpg"},
    {champion: "Vivian", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/vivian.jpg"},
    {champion: "Vora", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/vora.jpg"},
    {champion: "Willo", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/willo.jpg"},
    {champion: "Yagorath", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/yagorath.jpg"},
    {champion: "Ying", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/ying.jpg"},
    {champion: "Zhin", src: "https://webcdn.hirezstudios.com/paladins/champion-icons/zhin.jpg"},
]

let roles = ["tank", "support", "damage", "flank"]

$("#launch").on("click", function() {
    let secret = Math.floor(Math.random() * available.length) + available.length;
    let champIndex = 0;
    let anim = setInterval(function() {
        $("#selected img").attr("src", available[champIndex].src);
        $("#selected p").text(available[champIndex].champion);
        if(champIndex == available.length - 1) champIndex = 0;
        else champIndex++;
        secret--;
        if(secret <= 0) clearInterval(anim);
    }, 20);
});

$("#ban").on("click", function() {
    let champ = $("#selected img");
    let champTxt = $("#selected p").text();
    let img = $("<img>").attr("src", $(champ).attr("src"));
    $("#banned-sub").append(img);
    available = available.filter(v => v.champion != champTxt);
    let champObj = champions.find(v => v.champion == champTxt);
    champObj.ban = true;
    $("#launch").trigger("click");
});

$("#banned-sub").on("click", function(e) {
    let img = e.target;
    for(let c of champions) {
        if(c.src == $(img).attr("src")) {
            available.push(c);
        }
    }
    let champObj = champions.find(v => v.champion == champTxt);
    champObj.ban = false;
    $(img).remove();
});