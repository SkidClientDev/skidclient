//
//
//
///////////////////////////////////////////////////////
//please do not steal code!                          //
//please do not skid this client(rename this client) //
//Skid B2                                            //
//Made By @SkidClient                                //
///////////////////////////////////////////////////////
//
//
//
//
//
//
//
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var Button = android.widget.Button;
var LinearLayout = android.widget.LinearLayout;
var RelativeLayout = android.widget.RelativeLayout;
var PopupWindow = android.widget.PopupWindow;
var ScrollView = android.widget.ScrollView;
var TextView = android.widget.TextView;
var CheckBox = android.widget.CheckBox;
var Switch = android.widget.Switch;
var Toast = android.widget.Toast;
var Runnable = java.lang.Runnable;
var View = android.view.View;
var ColorDrawable = android.graphics.drawable.ColorDrawable;
var Color = android.graphics.Color;
var Gravity = android.view.Gravity;
var view = 0;
var Intent = android.content.Intent;
var Uri = android.net.Uri;

var view = 0;

var lhtick = 0;

var esp = false;
//BACKGROUND STUFF

var bg = new android.graphics.drawable.GradientDrawable();
bg.setColor(android.graphics.Color.TRANSPARENT); //ButtonBGColor
bg.setStroke(4, android.graphics.Color.BLUE); //ButtonStroke
bg.setCornerRadius(2); //ButtonCornerRadius

var bgon = new android.graphics.drawable.GradientDrawable();
bgon.setColor(android.graphics.Color.BLUE); //ButtonBGColor

bgon.setCornerRadius(2); //ButtonCornerRadius

var bgoff = new android.graphics.drawable.GradientDrawable();
bgoff.setColor(android.graphics.Color.BLACK); //ButtonBGColor
bgoff.setStroke(4, android.graphics.Color.BLUE); //ButtonStroke
bgoff.setCornerRadius(2); //ButtonCornerRadius

var bg1 = new android.graphics.drawable.GradientDrawable();
bg1.setColor(android.graphics.Color.BLACK); //ButtonBGColor
bg1.setStroke(4, android.graphics.Color.BLUE); //ButtonStroke
bg1.setCornerRadius(2); //ButtonCornerRadius

var bg2 = new android.graphics.drawable.GradientDrawable();
bg2.setColor(android.graphics.Color.BLACK); //ButtonBGColor
bg2.setStroke(4, android.graphics.Color.BLUE); //ButtonStroke
bg2.setCornerRadius(2); //ButtonCornerRadius

var xbg = new android.graphics.drawable.GradientDrawable();
xbg.setColor(android.graphics.Color.TRANSPARENT); //XButtonBGColor
xbg.setStroke(4, android.graphics.Color.BLACK); //XButtonStroke
xbg.setCornerRadius(2); //XButtonCornerRadius

var btbg = new android.graphics.drawable.GradientDrawable();
btbg.setColor(Color.BLUE);
btbg.setAlpha(100);

var btbg2 = new android.graphics.drawable.GradientDrawable();
btbg2.setColor(Color.BLACK);
btbg2.setAlpha(100);

var bttheme = new android.graphics.drawable.GradientDrawable();
bttheme.setColor(android.graphics.Color.WHITE);
bttheme.setStroke(7, android.graphics.Color.RED);
bttheme.setCornerRadius(10);

var darktheme = new android.graphics.drawable.GradientDrawable();
darktheme.setColor(android.graphics.Color.BLACK);
darktheme.setStroke(7, android.graphics.Color.RED);
darktheme.setCornerRadius(0);

var darkbt = new android.graphics.drawable.GradientDrawable();
darkbt.setColor(android.graphics.Color.WHITE);
darkbt.setStroke(7, android.graphics.Color.RED);
darkbt.setCornerRadius(0);

var darkbt2 = new android.graphics.drawable.GradientDrawable();
darkbt2.setColor(android.graphics.Color.BLACK);
darkbt2.setStroke(7, android.graphics.Color.RED);
darkbt2.setCornerRadius(0);

var maintheme = bttheme;
var mainbt = btbg;
var mainbt2 = btbg2;

var tbg = new android.graphics.drawable.GradientDrawable();
tbg.setColor(android.graphics.Color.argb(0, 0, 0, 0)); //ButtonBGColor
tbg.setStroke(2, android.graphics.Color.TRANSPARENT); //ButtonStroke
tbg.setCornerRadius(0); //ButtonCornerRadius
//using .help ,etc

function chatHook(text) {

    if (text == ".help") {
        preventDefault();
        clientMessage(".hitbox");
        clientMessage(".glide");
    }

    if (text == ".hitbox") {
        preventDefault();
        if (hitboxed == false) {
            hitboxed = true;
            clientMessage("SkidClient => Hitbox Turned on");
        } else {
            hitboxed = false;
            clientMessage("SkidClient => Hitbox Turned off");
        }
    }

    if (text == ".glide") {
        preventDefault();
        clientMessage(".glidelbsg => Crouch Glide(LBSG BYPASS)");
    }

    if (text == ".glidelbsg") {
        preventDefault();
        if (bgl1 == false) {
            bgl1 = true;
            clientMessage("SkidClient => Glide Turned on");
        } else {
            bgl1 = false;
            clientMessage("SkidClient => Glide Turned off");
        }
    }

}




function newLevel() {
    clientMessage("§aSKIDClientk§eBy @SkidClient");
    clientMessage(ChatColor.BLUE + "SYSTEM:Welcome " + ChatColor.BLUE + Player.getName(Player.getEntity()) + ChatColor.YELLOW + " Your Using SKID Client");
    ModPE.showTipMessage('§aHACKING IS FUN FUN!!')
}
ModPE.langEdit("menu.copyright", ChatColor.BLUE + "SKID" + ChatColor.BLACK + "Hack: " + ChatColor.WHITE + " " + "YoUTube" + " @SkidClient");

//MORE GUI + VARIABLES
function newLevel() {
    ModPE.showTipMessage('§aMade By: @SkidClient')
    ModPE.showTipMessage('§aHAVE FUN HACKING!')
}
ModPE.langEdit("menu.copyright", " SKID B3");

var GUI;
var menu;
var exitUI;

//YOUR CLIENT INFORMATION
var NAME = "SKID";
var DEVELOPERS = "@SkidClient";
var CHANELOG = "Added Lot Of Stuff and remaked everything from B1 version!";

//AutoUpdate
var version = "B3";;
//this version
var url = new java.net.URL("https://raw.githubusercontent.com/SkidClientDev/skidclient/master/SkidB3.js");
//newer version
var url2 = new java.net.URL("https://raw.githubusercontent.com/SkidClientDev/skidclient/master/Skid.js");

var connection = url.openConnection();
var inputStream = connection.getInputStream();
var bufferedReader = new java.io.BufferedReader(new java.io.InputStreamReader(inputStream));

var connection2 = url2.openConnection();
var inputStream2 = connection2.getInputStream();
var bufferedReader2 = new java.io.BufferedReader(new java.io.InputStreamReader(inputStream2));

Linkversion = bufferedReader.readLine();
Versionv = bufferedReader2.readLine();

if (Versionv != version) {
    UpdateDialog();
}

function UpdateDialog() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {

                var u1s = new android.widget.LinearLayout(ctx);
                u1s.setOrientation(android.widget.LinearLayout.VERTICAL);
                var u1 = new Button(ctx);
                u1.setBackground(utheme);
                u1.getBackground().setAlpha(140);
                u1.setGravity(Gravity.CENTER);
                u1.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {

                        uarningp.dismiss();
                        uMenu.dismiss();
                        uaMenu.dismiss();



                        var urls4 = new android.content.Intent(ctx);
                        urls4.setAction(android.content.Intent.ACTION_VIEW);
                        urls4.setData(android.net.Uri.parse(Linkversion));
                        ctx.startActivity(urls4);

                    }
                }));
                u1s.addView(u1, 1500, 500);



                uarningp = new android.widget.PopupWindow(u1s, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
                uarningp.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                uarningp.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);

            } catch (err) {
                Toast.makeText(ctx, "An error occured: " + err, 1).show();
            }
        }
    }));

    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var amMenuLayout = new LinearLayout(ctx);
                var amMenuScroll = new ScrollView(ctx);
                var amMenuLayout1 = new LinearLayout(ctx);
                amMenuLayout.setOrientation(1);
                amMenuLayout.setBackground(jbg);
                amMenuLayout.getBackground().setAlpha(0);
                amMenuLayout1.setOrientation(1);
                amMenuScroll.addView(amMenuLayout);
                amMenuLayout1.addView(amMenuScroll);

                var uarn1 = new TextView(ctx);
                uarn1.setText("New Update available: " + Versionv);
                uarn1.setTextColor(android.graphics.Color.rgb(0, 0, 0));
                uarn1.setTextSize(22);
                uarn1.setGravity(Gravity.BOTTOM);
                amMenuLayout.addView(uarn1);

                uMenu = new PopupWindow(amMenuLayout1, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
                uMenu.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                uMenu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, 0, 60);
            } catch (error) {
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
        }
    }));
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var amMenuLayout = new LinearLayout(ctx);
                var amMenuScroll = new ScrollView(ctx);
                var amMenuLayout1 = new LinearLayout(ctx);
                amMenuLayout.setOrientation(1);
                amMenuLayout.setBackground(jbg);
                amMenuLayout.getBackground().setAlpha(0);
                amMenuLayout1.setOrientation(1);
                amMenuScroll.addView(amMenuLayout);
                amMenuLayout1.addView(amMenuScroll);

                var watttermark = new TextView(ctx);
                watttermark.setText("Update");
                watttermark.setTextColor(android.graphics.Color.rgb(0, 0, 0));
                watttermark.setTextSize(28);
                watttermark.setGravity(Gravity.BOTTOM);
                amMenuLayout.addView(watttermark);

                uaMenu = new PopupWindow(amMenuLayout1, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
                uaMenu.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                uaMenu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, 0, -170);
            } catch (error) {
                Toast.makeText(ctx, "An error occured: " + error, 1).show();
            }
        }
    }));
}

//Variables

var dx = 0;
var dy = 0;
var dx2 = 0;
var dy2 = 0;
var mPosX2 = 0;
var mPosY2 = 0;

var dx232 = 0;
var dy232 = 0;
var mPosX232 = 285 + 285;
var mPosY232 = 0;

var dx23 = 0;
var dy23 = 0;
var mPosX23 = 285;
var mPosY23 = 0;

var dxf = 0;
var dyf = 0;
var mPosXf = 0;
var mPosYf = 0;

var dxj = 0;
var dyj = 0;
var mPosXj = 0;
var mPosYj = 0;
var moving = false;

var gmSwitchs
var gmSwitched = false;

var daynight1
var daynight3 = false;

var gmSwitchs0
var gmSwitched3 = false;

var gmSwitchs1
var gmSwitchedd = false;

var gmSwitchs2
var gmSwitcheddd = false;

var gmSwitchs3
var gmSwitchedddd = false;

var gmSwitchs4
var gmSwitcheddddd = false;

var gmSwitchs5
var gmSwitchedddddd = false;

var gmSwitchs5
var gmSwitchedd2 = false;

var gmSwitchs6
var gmSwitchedd3 = false;

var gmSwitchs7
var gmSwitchedd4 = false;

var gmSwitchs8
var gmSwitchedd5 = false;

var gmSwitchs9
var gmSwitchedd6 = false;

var gmSwitchs10
var gmSwitchedd7 = false;

var gmSwitchs11
var gmSwitchedd8 = false;

var gmSwitchs12
var gmSwitchedd9 = false;

var gmSwitchs13
var gmSwitchedd10 = false;

var gmSwitchs14
var gmSwitchedd11 = false;

var aim;
var aimbot = false;
var aimed = false;

var vtped = false;
var vtp;
var vport = false;

var cspeeds
var cspeedss = false;
var cspeeded = false;

var elevators = false;
var elevatored = false;

var elevators4
var elevatoredddd = false;

var ndglides
var ndglidess = false;
var ndglideed = false;

var taptowers
var taptowerss = false;
var taptowered = false;

var taptps
var taptpss = false;
var taptped = false;

var toggled = false;

var antikbs
var antikbss = false;
var antikbed = false;

var spams
var spamss = false;
var spammed = false;

var livecords
var livecordss = false;
var livecored = false;

var bhop = false;
var bhopl = false;
var bhoped = false;

var bhop2 = false;
var bhopll = false;
var bhoped2 = false;

var steps
var stepss = false;
var steped = false;

var farbots
var farbotss = false;
var farboted = false;

var hitboxs
var hitboxss = false;
var hitboxed = false;

var quickescapes
var quickescapess = false;
var quickescaped = false;

var jsed = false;
var js;
var jesus = false;

var msped = false;
var msp;
var motion = false;

var js
var js1 = false;
var js2 = false;

var sw
var sw1 = false;
var sw2 = false;

var mh
var mh1 = false;
var mh2 = false;

var sc
var sc1 = false;
var sc2 = false;

var nf
var nf1 = false;
var nf2 = false;

var fb
var fb1 = false;
var fb2 = false;

var glides
var glidess = false;
var glideed = false;

var pg
var pg1 = false;

var sm
var sm1 = false;

var sf
var sf1 = false;

var ci
var ci1 = false;

var fp
var fp1 = false;

var lg
var lg1 = false;

var ahged = false;
var ahg;
var ahunger = false;

var reged = false;
var reg;
var regen = false;

var bf2 = false;
var bf1 = false;
var bouncedelay = 9;
var bouncevel = 0.33;
var bouncespeed = 1.08;

var time = 2.0;

var lg
var lg1 = false;
var lg2 = false;

var tb
var tb1 = false;
var tb2 = false;

var pe
var pe1 = false;
var pe2 = false;

var yp
var yp1 = false;
var yp2 = false;

var ba
var ba1 = false;
var ba2 = false;

var airjumps
var airjumped = false;

var at
var at1 = false;
var at2 = false;

var aw
var aw1 = false;
var aw2 = false;

var sb2 = false;
var sb1 = false;
var bouncedelay = 9;
var bouncevel = 0.40;
var bouncespeed = 1.08;

var tima = 3.0;

var ls
var ls1 = false;
var ls2 = false;

var gr
var gr1 = false;
var gr2 = false;

var csb
var csb1 = false;
var csb2 = false;

var btp
var btp1 = false;
var btp2 = false;

var bz
var bz1 = false;
var bz2 = false;

var bw
var bw1 = false;
var bw2 = false;

var dv
var dv1 = false;
var dv2 = false;

var hj
var hj1 = false;
var hj2 = false;

var forcedestroys
var forcedestroyss = false;
var forcedestroyed = false;

var ch
var ch1 = false;
var ch2 = false;

var cs
var cs1 = false;
var cs2 = false;

var ab
var ab1 = false;
var ab2 = false;

var jp
var jp1 = false;
var jp2 = false;

var airjumpss
var airjumpedd = false;

var airjumpsss
var airjumpeddd = false;

var airjumpssss
var airjumpedddd = false;

var airjumpsssss
var airjumpeddddd = false;

var airjumpssssss
var airjumpedddddd = false;

var airjumpsssssss
var airjumpeddddddd = false;

var airjumpssssssss
var airjumpedddddddd = false;

var airjumpsssssssss
var airjumpeddddddddd = false;

var airjumpsssssssss
var airjumpedddddddddd = false;


var he
var he1 = false;
var he2 = false;

var dj
var dj1 = false;
var dj2 = false;

var lh
var lh1 = false;
var lh2 = false;

var bj
var bj1 = false;
var bj2 = false;

var ljj
var ljj1 = false;
var ljj2 = false;

var ir
var ir1 = false;
var ir2 = false;
var ir3 = null;

var lh
var lh1 = false;
var lh2 = false;
var can = 1;
var canGetHP = 1;
var HP;
var gravity = -0.07840000092983246;

var fa
var fa1 = false;
var fa2 = false;

var blj
var blj1 = false;
var blj2 = false;
var sacounter = null;

var ljc
var ljc1 = false;
var ljc2 = false;
var sboost = 0.9;
var jboost = 0.8
var fboost = 0.84;
var normalspeed = 1.00;

var tnt
var tnt1 = false;
var tnt2 = false;

var ar
var ar1 = false;
var ar2 = false;

var nt
var nt1 = false;
var nt2 = false;

var nw
var nw1 = false;
var nw2 = false;

var sp
var sp1 = false;
var sp2 = false;

var rtp
var rtp1 = false;
var rtp2 = false;

var mdglides
var mdglidess = false;
var mdglideed = false;

var gdglides
var gdglidess = false;
var gdglideed = false;

var ta
var ta1 = false;
var ta2 = false;
var ta3 = null;

var as
var as1 = false;
var as2 = false;

var sa
var sa1 = false;
var sa2 = false;

var saa
var saa1 = false;
var saa2 = false;

var Gui
var Gui1 = false;

var Gui
var Gui2 = false;

var Gui
var Gui3 = false;

var Gui
var Gui4 = false;

var Gui
var Gui9 = false;

var css
var css1 = false;
var css2 = false;

var fw
var fw1 = false;
var fw2 = false;

var bb
var bb1 = false;
var bb2 = false;

var rg
var rg1 = false;
var rg2 = false;
var regenX = Player.getX();
var regenZ = Player.getZ();

var aas
var aas1 = false;
var aas2 = false;

var az
var az1 = false;
var az2 = false;
var time = 0;

var ea
var ea1 = false;
var ea2 = false;
var tCounter = 0;

var Gui
var Gui5 = false;

var Gui
var Gui6 = false;

var Gui
var Gui7 = false;

var eaet = false;
var uspe = 2;

var stealths
var stealthss = false;
var stealthed = false;

var ddj
var ddj1 = false;
var ddj2 = false;

var ftp
var ftp1 = false;
var ftp2 = false;
var ftp3 = null;

var nbb
var nbb1 = false;
var nbb2 = false;


var fl
var fl1 = false;
var fl2 = false;
var ladderspeed = 1;

var bst
var bst1 = false;
var bst2 = false;

var ff
var ff1 = false;
var ff2 = false;

var fv
var fv1 = false;
var fv2 = false;
var vinespeed = 1;

var fi
var fi1 = false;
var fi2 = false;

var cm
var cm1 = false;
var cm2 = false;
var tptick = 0;

var nw
var nw1 = false;
var nw2 = false;

var asb
var asb1 = false;
var asb2 = false;

var da
var da1 = false;
var da2 = false;

var bgl
var bgl1 = false;
var bgl2 = false;
var mftick = 0;

var ninja
var ninja1 = false;
var ninja2 = false;

var textview

var pvp
var pvp1 = false;
var pvp2 = false;

var hb
var hb2 = false;
var hb2 = false;

var hb
var hb3 = false;
var hb3 = false;

var hb
var hb4 = false;
var hb4 = false;

var aimbot1
var ab1 = false;
var ab2 = false;

var aimbot2 = false;
var abb1 = false;
var abb2 = false;

var aimbot3 = false;
var abbb1 = false;
var abbb2 = false;

var aimbot4 = false;
var abbbb1 = false;
var abbbb2 = false;
//Utlis

var defaultDestroyTime = [
    null, 1.5, 0.6, 0.5, 2, 2, 0, -1, null, null, null, null, 0.5, 0.6, 3, 3, 3, 2,
    0.2, 0.6, 0.3, 3, 3, null, 0.8, null, 0.2, 0.7, null, null, 4, 0, 0, null, null,
    0.8, null, 0, 0, 0, 0, 3, 5, 2, 2, 2, 0, 1.5, 2, 50, 0, 0, null, 2, 2.5, null,
    3, 5, 2.5, 0, 0.6, 3.5, 3.5, 1, 3, 0.4, 0.7, 2, 1, null, null, 5, null, 3, 3,
    null, null, null, 0.1, 0.5, 0.2, 0.4, 0.6, 0, null, 2, 1, 0.4, 0.3, null, 1, 0.5,
    null, null, -1, 3, null, 1.5, null, null, 5, 0.3, 1, 0, 0, null, 2, 2, 1.5, null,
    null, 2, null, 2, null, null, null, null, null, null, null, null, null, null, null,
    null, null, 0.8, null, null, null, null, null, 2, 2, 2, null, null, 2, null, 0, 0,
    null, null, null, null, null, null, null, null, null, null, null, null, 0.8, 0.8,
    2, 2, null, null, null, null, null, null, null, null, null, null, null, 0.5, 0.1,
    5, null, null, null, null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null, null, null, null, null,
    null, 0, 3.5, 50, 5, 0.6, 0.6, 5, null, null, null, null, 0
];

var playerDir = [0, 0, 0];
var DEG_TO_RAD = Math.PI / 180;
var playerFlySpeed = 50;
var falling = 0;
var next = 0;
var px, py, pz, lx, ly, lz, vel, saver;
var cd = 0;
var s = 0;
var Xdiff;
var Zdiff;
var Xpos;
var Zpos;
var can = 1;
var canGetHP = 1;
var HP;
var gravity = -0.07840000092983246;
var Entities = [];
var counter = 0;

var Utils = {
    File: {
        dragopDir: android.os.Environment.getExternalStorageDirectory() + "/DragOP/",
        getTextFromFile: function(file) {
            let readed = (new java.io.BufferedReader(new java.io.FileReader(file)));
            let data = new java.lang.StringBuilder();
            let string;
            while ((string = readed.readLine()) != null) data.append(string + "\n");
            return data.toString();
        },
        saveTextToFile: function(file, text) {
            if (!file.exists()) file.createNewFile();
            let bytes = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, text.length());
            for (let i = 0; i < text.length(); i++) bytes[i] = text.charCodeAt(i);
            let stream = new java.io.FileOutputStream(file);
            try {
                stream.write(bytes);
            } finally {
                stream.close();
            }
        }
    },
    Render: {
        getFloatBuffer: function(fArray) {
            let bBuffer = java.nio.ByteBuffer.allocateDirect(fArray.length * 4);
            bBuffer.order(java.nio.ByteOrder.nativeOrder());

            let fBuffer = bBuffer.asFloatBuffer();
            fBuffer.put(fArray);
            fBuffer.position(0);
            return fBuffer;
        },
        getShortBuffer: function(sArray) {
            let bBuffer = java.nio.ByteBuffer.allocateDirect(sArray.length * 2);
            bBuffer.order(java.nio.ByteOrder.nativeOrder());

            let sBuffer = bBuffer.asShortBuffer();
            sBuffer.put(sArray);
            sBuffer.position(0);
            return sBuffer;
        },
        renderer: null,
        glSurface: null,
        fov: 90,

        color: android.graphics.Color.argb(180, 255, 0, 0),

        initted: false,
        init: function() {
            if (Utils.Render.initted)
                return;
            let options = Utils.File.getTextFromFile(new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/", "options.txt"));


            options = options.split("\n");
            options.forEach(function(entry) {
                let suboption = entry.split(":");
                if (suboption[0] == "gfx_field_of_view") {
                    Utils.Render.fov = suboption[1];


                }
            });
            this.renderer = new android.opengl.GLSurfaceView.Renderer({
                onSurfaceCreated: function(gl, config) {
                    let GL10 = javax.microedition.khronos.opengles.GL10;
                    gl.glClearColor(0, 0, 0, 0);
                    gl.glShadeModel(GL10.GL_SMOOTH);
                    gl.glClearDepthf(1.0);
                    gl.glDisable(GL10.GL_DITHER);
                    gl.glEnable(GL10.GL_DEPTH_TEST);
                    gl.glDepthFunc(GL10.GL_LEQUAL);
                    gl.glHint(GL10.GL_PERSPECTIVE_CORRECTION_HINT, GL10.GL_NICEST);
                },
                onSurfaceChanged: function(gl, width, height) {
                    let GL10 = javax.microedition.khronos.opengles.GL10;
                    gl.glMatrixMode(GL10.GL_PROJECTION);
                    gl.glLoadIdentity();
                    android.opengl.GLU.gluPerspective(gl, Utils.Render.fov, width / height, 0.1, 100);
                    gl.glMatrixMode(GL10.GL_MODELVIEW);
                    gl.glLoadIdentity();
                },
                onDrawFrame: function(gl) {

                    let GL10 = javax.microedition.khronos.opengles.GL10;
                    gl.glClear(GL10.GL_COLOR_BUFFER_BIT | GL10.GL_DEPTH_BUFFER_BIT);
                    gl.glLoadIdentity();

                    if (esp == true && getPlayerEnt() != -1) {
                        try {

                            gl.glDisable(GL10.GL_LIGHTING);
                            let yaw = getYaw() % 360;
                            let pitch = getPitch() % 360;
                            let eyeX = getPlayerX();
                            let eyeY = getPlayerY() + 1;
                            let eyeZ = getPlayerZ();

                            let dCenterX = Math.sin(yaw / 180 * Math.PI);
                            let dCenterZ = Math.cos(yaw / 180 * Math.PI);
                            let dCenterY = Math.sqrt(dCenterX * dCenterX + dCenterZ * dCenterZ) * Math.tan((pitch - 180) / 180 * Math.PI);

                            let centerX = eyeX - dCenterX;
                            let centerZ = eyeZ + dCenterZ;
                            let centerY = eyeY - dCenterY;

                            android.opengl.GLU.gluLookAt(gl, eyeX, eyeY, eyeZ, centerX, centerY, centerZ, 0, 1.0, 0);

                            //Hardcoding the esp
                            //Skidders, dont do that

                            let mobs = Entity.getAll();
                            let players = Server.getAllPlayers();

                            //clientMessage(mobs.length);
                            mobs.forEach(function(entry) {

                                if (entry != getPlayerEnt() && Entity.getEntityTypeId(entry) == EntityType.PLAYER) {
                                    Utils.Render.drawBox(gl, Entity.getX(entry) - 0.5, Entity.getY(entry) - 0.5, Entity.getZ(entry) - 0.50, 1, 2, 1);

                                }
                            });
                            players.forEach(function(entry) {
                                if (entry != getPlayerEnt() && Entity.getEntityTypeId(entry) == EntityType.PLAYER) {
                                    Utils.Render.drawBox(gl, Entity.getX(entry) - 0.5, Entity.getY(entry) - 0.5, Entity.getZ(entry) - 0.5, 1, 2, 1);

                                }
                            });


                        } catch (e) {
                            clientMessage("RenderProblem: " + e);
                        }

                    } else {

                    }
                }
            });
            ctx.runOnUiThread(new java.lang.Runnable({
                run: function() {
                    Utils.Render.glSurface = new android.opengl.GLSurfaceView(ctx);
                    Utils.Render.glSurface.setZOrderOnTop(true);


                    Utils.Render.glSurface.setEGLConfigChooser(8, 8, 8, 8, 16, 0);
                    Utils.Render.glSurface.getHolder().setFormat(android.graphics.PixelFormat.TRANSLUCENT);
                    Utils.Render.glSurface.setRenderer(Utils.Render.renderer);


                    ctx.getWindow().getDecorView().addView(Utils.Render.glSurface);

                    Utils.Render.initted = true;
                }
            }));

        },
        drawBox: function(gl, x, y, z, xsize, ysize, zsize) {

            let GL10 = javax.microedition.khronos.opengles.GL10;
            let size = new Array(xsize, ysize, zsize);
            let vertices = [
                0, 0, 0,
                size[0], 0, 0,
                0, 0, size[2],
                size[0], 0, size[2],

                0, size[1], 0,
                size[0], size[1], 0,
                0, size[1], size[2],
                size[0], size[1], size[2]
            ];
            let vertexBuffer = Utils.Render.getFloatBuffer(vertices);
            let lineIndices = [
                0, 1,
                0, 2,
                0, 4,

                3, 1,
                3, 2,
                3, 7,

                5, 4,
                5, 7,
                5, 1,

                6, 4,
                6, 7,
                6, 2
            ];
            let polyIndices = [
                0, 1, 4,
                1, 4, 5,

                2, 3, 6,
                7, 6, 3,

                1, 3, 7,
                7, 1, 5,

                0, 2, 6,
                6, 0, 4,

                0, 1, 2,
                3, 1, 2,

                4, 5, 6,
                7, 5, 6
            ];
            let lineBuffer = Utils.Render.getShortBuffer(lineIndices);
            let polyBuffer = Utils.Render.getShortBuffer(polyIndices);
            gl.glTranslatef(x, y, z);
            gl.glFrontFace(GL10.GL_CCW);
            gl.glEnable(GL10.GL_BLEND);
            //gl.glEnable(GL10.GL_LINE_SMOOTH);
            gl.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
            gl.glLineWidth(7);
            gl.glColor4f(android.graphics.Color.BLUE(Utils.Render.color) / 255, android.graphics.Color.BLUE(Utils.Render.color) / 255, android.graphics.Color.red(Utils.Render.color) / 255, 0.7);
            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);

            gl.glColor4f(android.graphics.Color.BLUE(Utils.Render.color) / 255, android.graphics.Color.BLUE(Utils.Render.color) / 255, android.graphics.Color.red(Utils.Render.color) / 255, 0.2);
            gl.glDrawElements(GL10.GL_TRIANGLES, polyIndices.length, GL10.GL_UNSIGNED_SHORT, polyBuffer);
            gl.glDisable(GL10.GL_LINE_SMOOTH);
            gl.glTranslatef(-x, -y, -z);
        },
        drawLine: function(gl, x, y, z, x2, y2, z2) {

            let GL10 = javax.microedition.khronos.opengles.GL10;
            let size = new Array(x2, y2, z2);
            let vertices = [
                0, 0, 0,
                x2 - x, y2 - y, z2 - z
            ];
            let vertexBuffer = Utils.Render.getFloatBuffer(vertices);
            let indices = [
                0, 1
            ];
            let indexBuffer = Utils.Render.getShortBuffer(indices);
            gl.glTranslatef(x, y, z);
            gl.glEnable(GL10.GL_BLEND);
            gl.glDepthMask(false);
            //gl.glEnable(GL10.GL_LINE_SMOOTH);
            gl.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
            gl.glLineWidth(4);
            gl.glColor4f(android.graphics.Color.red(Utils.Render.color) / 255, android.graphics.Color.BLUE(Utils.Render.color) / 255, android.graphics.Color.blue(Utils.Render.color) / 255, 0.7);
            gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
            gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
            gl.glDrawElements(GL10.GL_LINES, indices.length, GL10.GL_UNSIGNED_SHORT, indexBuffer);
            gl.glTranslatef(-x, -y, -z);
            gl.glDepthMask(true);
            gl.glDisable(GL10.GL_LINE_SMOOTH);
        }
    },
    Block: {
        isLiquid: function(id) {
            if (id >= 8 && id <= 11) return true;
            return false;
        },
        isLadder: function(id) {
            if (id = 65) return true;
            return false;
        },
        isWeb: function(id) {
            if (id = 30) return true;
            return false;
        },
        isIce: function(id) {
            if (id = 79 && id = 174) return true;
            return false;
        }
    },
    onRender: function(gl) {
        if (!this.state)
            return
        var all = Utils.Entity.getAll();
        var players = Server.getAllPlayers();
        var px = getPlayerX();
        var py = getPlayerY();
        var pz = getPlayerZ();
        all.forEach(function(entry) {
            var x = Entity.getX(entry) - px;
            var y = Entity.getY(entry) - py;
            var z = Entity.getZ(entry) - pz;

            var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));

            if (dist <= 200 && dist > 0.1)
                Utils.Render.drawLine(gl, px, py + 0.8, pz, Entity.getX(entry), Entity.getY(entry) + 1, Entity.getZ(entry));
        });
        players.forEach(function(entry) {
            var x = Entity.getX(entry) - px;
            var y = Entity.getY(entry) - py;
            var z = Entity.getZ(entry) - pz;

            var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));

            if (dist <= 200 && dist > 0.1)
                Utils.Render.drawLine(gl, px, py + 0.8, pz, Entity.getX(entry), Entity.getY(entry) + 1, Entity.getZ(entry));
        });
    },
    Velocity: {
        calculateSpeed: function() {
            return Math.sqrt(Math.pow(Entity.getVelX(getPlayerEnt()), 2) + Math.pow(Entity.getVelZ(getPlayerEnt()), 2));
        }
    },
    Player: {
        isFall: function() {
            var velo = -0.07840000092983246;
            if (!Utils.Player.onGround() && Entity.getVelY(Player.getEntity()) < velo) return true;
            return false;
        },
        isAutoEagle: function() {
            if (getTile(getPlayerX() + 0.0001, getPlayerY() - 2, getPlayerZ() + 0.0001) == 0 ||
                getTile(getPlayerX() - 0.0001, getPlayerY() - 2, getPlayerZ() - 0.0001) == 0 ||
                getTile(getPlayerX() + 0.0001, getPlayerY() - 2, getPlayerZ() - 0.0001) == 0 ||
                getTile(getPlayerX() - 0.0001, getPlayerY() - 2, getPlayerZ() + 0.0001) == 0) return true;
            return false;
        },
        isInWater: function() {
            if (Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
                return true;
            } else {
                return false;
            }
        },
        isInIce: function() {
            if (Utils.Block.isIce(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 0.1, Entity.getZ(getPlayerEnt())))) {
                return true;
            } else {
                return false;
            }
        },
        isOnWeb: function() {
            if (Utils.Block.isWeb(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 0.1, Entity.getZ(getPlayerEnt())))) {
                return true;
            } else {
                return false;
            }
        },
        isOnLadder: function() {
            if (Utils.Block.isLadder(getTile(getPlayerX(), getPlayerY() + 0.1, getPlayerZ()))) return true;
            return false;
        },
        onGround: function() {
            var y = getPlayerY();
            while (y > 1) y -= 1;

            if (Math.round(y * 100) == 62 && getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()) != 0 && !Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()))) return true;
            if (Math.round(y * 100) == 12 && getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()) != 0 && !Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()))) return true;
            return false;
        },
        overGround: function() {
            var y = getPlayerY();
            while (y > 2) y -= 2;

            if (Math.round(y * 100) == 62 && getTile(getPlayerX(), getPlayerY() - 2.15, getPlayerZ()) != 0 && !Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 2.15, getPlayerZ()))) return true;
            if (Math.round(y * 100) == 12 && getTile(getPlayerX(), getPlayerY() - 2.15, getPlayerZ()) != 0 && !Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 2.15, getPlayerZ()))) return true;
            return false;
        },
        isCollidedHorizontally: function() {
            var x = getPlayerX();
            var z = getPlayerZ();
            var blockX = Math.round(x - 0.5);
            var blockZ = Math.round(z - 0.5);
            while (x < 1) x += 1;
            while (z < 1) z += 1;
            while (x > 1) x -= 1;
            while (z > 1) z -= 1;

            if (Math.round(x * 100) == 31) x -= 0.01;
            if (Math.round(z * 100) == 31) z -= 0.01;
            if (Math.round(x * 100) == 69) x += 0.01;
            if (Math.round(z * 100) == 69) z += 0.01;
            if (Math.round(x * 100) == 30) blockX--;
            if (Math.round(z * 100) == 30) blockZ--;
            if (Math.round(x * 100) == 70) blockX++;
            if (Math.round(z * 100) == 70) blockZ++;
            //clientMessage(blockX+";"+blockZ);
            if (getTile(blockX, Entity.getY(getPlayerEnt()), blockZ) == 0 && getTile(blockX, Entity.getY(getPlayerEnt()) - 1, blockZ) == 0) return false;

            if (Block.getDestroyTime(getTile(blockX, Entity.getY(getPlayerEnt()) - 1, blockZ)) <= 0.1 && Block.getDestroyTime(getTile(blockX, Entity.getY(getPlayerEnt()), blockZ)) <= 0.1) return false;

            if (Math.round(x * 100) == 30 || Math.round(x * 100) == 70) return true;
            if (Math.round(z * 100) == 30 || Math.round(z * 100) == 70) return true;
            return false;
        }
    },
    Vel: {
        lastX: 0,
        lastY: 0,
        lastZ: 0,
        calculateSpeed: function() {
            return Math.sqrt(Math.pow(Entity.getVelX(getPlayerEnt()), 2) + Math.pow(Entity.getVelZ(getPlayerEnt()), 2));
        }
    }
};


function dip2px(dips) {
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

function showElevatorBtn() {

    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var layout = new LinearLayout(ctx);
                layout.setOrientation(1);
                var elevatorUpBtn = new Button(ctx);
                elevatorUpBtn.setText("Up");
                elevatorUpBtn.setTextColor(Color.BLUE);
                elevatorUpBtn.setBackground(bg2);
                elevatorUpBtn.setBackground(bg2);
                elevatorUpBtn.setPadding(10, 10, 10, 10);
                elevatorUpBtn.getBackground().setAlpha(150);
                elevatorUpBtn.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        Entity.setPositionRelative(getPlayerEnt(), 0, +2.53, 0);
                    }
                }));
                layout.addView(elevatorUpBtn);

                var elevatorDownBtn = new Button(ctx);
                elevatorDownBtn.setText("Down");
                elevatorDownBtn.setTextColor(Color.BLUE);
                elevatorDownBtn.setBackground(bg2);
                elevatorDownBtn.setPadding(10, 10, 10, 10);
                elevatorDownBtn.getBackground().setAlpha(150);
                elevatorDownBtn.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        Entity.setPosition(getPlayerEnt(), getPlayerX(), getPlayerY() - 1.01, getPlayerZ());
                    }
                }));
                layout.addView(elevatorDownBtn);

                GUIe = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
                GUIe.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUIe.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.CENTER, 0, 0);
            } catch (err) {
                Toast.makeText(ctx, "An error occured: " + err, 1).show();
            }
        }
    }));
}

function showJumpBtn() {

    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var layout = new LinearLayout(ctx);
                layout.setOrientation(1);
                var jumpBtn = new Button(ctx);
                jumpBtn.setText("J");
                jumpBtn.setTextColor(Color.BLUE);
                jumpBtn.setBackground(bg2);
                jumpBtn.getBackground().setAlpha(100);
                jumpBtn.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        setVelY(getPlayerEnt(), 0.4);
                    }
                }));
                layout.addView(jumpBtn);

                GUIj = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
                GUIj.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUIj.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.BOTTOM, 0, 0);
            } catch (err) {
                Toast.makeText(ctx, "An error occured: " + err, 1).show();
            }
        }
    }));
}

function showTeleportBtn() {

    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var layout = new LinearLayout(ctx);
                layout.setOrientation(1);
                var TeleportBtn = new Button(ctx);
                TeleportBtn.setText("TapTp");
                TeleportBtn.setTextColor(Color.BLUE);
                TeleportBtn.setBackground(bg2);

                TeleportBtn.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!taptped) {
                            taptpss = true;
                            taptped = true;
                            print("Tap tp on ")
                        } else {
                            print("Tap tp Off ")
                            taptpss = false;
                            taptped = false;
                        }
                    }
                }));
                layout.addView(TeleportBtn);

                GUIt = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
                GUIt.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUIt.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 0);
            } catch (err) {
                Toast.makeText(ctx, "An error occured: " + err, 1).show();
            }
        }
    }));
}

function showMenuBtn3() {

    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var layout = new LinearLayout(ctx);
                layout.setOrientation(1);
                var menuBtn3 = new Button(ctx);
                menuBtn3.setText("Boost");
                menuBtn3.setTextColor(android.graphics.Color.WHITE);
                menuBtn3.setBackground(bg2);
                menuBtn3.getBackground().setAlpha(100);
                menuBtn3.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        var hit = getYaw() + 90;
                        var hitY = getPitch() - 180;
                        x = Math.cos(hit * (Math.PI / 180));
                        y = Math.sin(hitY * (Math.PI / 180));
                        z = Math.sin(hit * (Math.PI / 180));
                        setVelX(Player.getEntity(), x * 1);
                        setVelY(Player.getEntity(), y * 1);
                        setVelZ(Player.getEntity(), z * 1);
                    }
                }));
                layout.addView(menuBtn3);

                GUI3 = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
                GUI3.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
                GUI3.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 330, 0);
            } catch (err) {
                Toast.makeText(ctx, "An error occured: " + err, 1).show();
            }
        }
    }));
}

function showMenuBtn44() {

    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var layout = new LinearLayout(ctx);
                layout.setOrientation(1);
                var menuBtn44 = new Button(ctx);
                menuBtn44.setText("Zoom");
                menuBtn44.setTextColor(android.graphics.Color.WHITE);
                menuBtn44.setBackground(bg2);
                menuBtn44.getBackground().setAlpha(100);
                menuBtn44.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!gmSwitchedd) {
                            ModPE.setFov(10.0)
                            gmSwitchedd = true;
                            print("Zoom on")
                        } else {
                            print("Zoom off")
                            ModPE.resetFov()
                            gmSwitchedd = false;
                        }
                    }
                }));
                layout.addView(menuBtn44);

                GUI44 = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
                GUI44.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
                GUI44.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 45);
            } catch (err) {
                Toast.makeText(ctx, "An error occured: " + err, 1).show();
            }
        }
    }));
}

//codes

function toDirectionalVector(vector, yaw, pitch) { //some parts of this function are made by @@SkidClient
    vector[0] = Math.cos(yaw) * Math.cos(pitch);
    vector[1] = Math.sin(pitch);
    vector[2] = Math.sin(yaw) * Math.cos(pitch);
}

function attackHook(att, vic) {
    if (att == Player.getEntity() && vport && Entity.getHealth(vic) > 0) {
        setPosition(getPlayerEnt(), Entity.getX(vic), Entity.getY(vic) + 2, Entity.getZ(vic));
    }
    if (att == Player.getEntity() && ninja1 && Entity.getHealth(vic) > 0) {
        setPosition(getPlayerEnt(), Entity.getX(vic), Entity.getY(vic) + 3, Entity.getZ(vic));
    }
    if (att == Player.getEntity() && fa1) {
        Entity.setCollisionSize(vic, 0, 0);
    }
    if (att == Player.getEntity() && cs1 && Utils.Player.onGround()) {
        setVelY(getPlayerEnt(), 0.4);
    }
    if (att == Player.getEntity() && he1 && Entity.getHealth(vic) > 0) {
        var ent = getNearestEntity(8);
        Entity.setCollisionSize(ent, 7, 5);
    }
    if (att == Player.getEntity() && bw1 && Entity.getHealth(vic) > 0) {
        setPosition(getPlayerEnt(), Entity.getX(vic) - 15, Entity.getY(vic) + 1, Entity.getZ(vic));
    }
    if (att == Player.getEntity() && cm1 && Entity.getHealth(vic) > 0) {
        var hit = getYaw() + 90;
        var hitY = getPitch() - 180;
        x = Math.cos(hit * (Math.PI / 180));
        y = Math.sin(hitY * (Math.PI / 180));
        z = Math.sin(hit * (Math.PI / 180));
        setVelX(Player.getEntity(), x * 1);
        setVelY(Player.getEntity(), y * 1);
        setVelZ(Player.getEntity(), z * 1);
        setPosition(getPlayerEnt(), Entity.getX(vic) + 1.5, Entity.getY(vic) + 1, Entity.getZ(vic) + 1.5)
        setPosition(getPlayerEnt(), Entity.getX(vic) - .7, Entity.getY(vic) + 1, Entity.getZ(vic) - .6)
        var hit = getYaw() + 80;
        var hitY = getPitch() - 180;
        x = Math.cos(hit * (Math.PI / 180));
        y = Math.sin(hitY * (Math.PI / 180));
        z = Math.sin(hit * (Math.PI / 180));
        setVelX(Player.getEntity(), x * -2);
        setVelY(Player.getEntity(), y * -2);
        setVelZ(Player.getEntity(), z * -2);
        setPosition(getPlayerEnt(), Entity.getX(vic) + 1.5, Entity.getY(vic) + 1.8, Entity.getZ(vic) + 1.7)
        setPosition(getPlayerEnt(), Entity.getX(vic) - 1, Entity.getY(vic) + 1.4, Entity.getZ(vic) - .7)
        var hit = getYaw() + 70;
        var hitY = getPitch() - 180;
        x = Math.cos(hit * (Math.PI / 180));
        y = Math.sin(hitY * (Math.PI / 180));
        z = Math.sin(hit * (Math.PI / 180));
        setVelX(Player.getEntity(), x * 1);
        setVelY(Player.getEntity(), y * 1);
        setVelZ(Player.getEntity(), z * 1);
        setPosition(getPlayerEnt(), Entity.getX(vic) + 1.7, Entity.getY(vic) + 1.6, Entity.getZ(vic) + 1.5)
        setPosition(getPlayerEnt(), Entity.getX(vic) - 1.2, Entity.getY(vic) + 1.6, Entity.getZ(vic) - .6)
        var hit = getYaw() + 60;
        var hitY = getPitch() - 180;
        x = Math.cos(hit * (Math.PI / 180));
        y = Math.sin(hitY * (Math.PI / 180));
        z = Math.sin(hit * (Math.PI / 180));
        setVelX(Player.getEntity(), x * -2);
        setVelY(Player.getEntity(), y * -2);
        setVelZ(Player.getEntity(), z * -2);
        setPosition(getPlayerEnt(), Entity.getX(vic) + 2, Entity.getY(vic) + 1, Entity.getZ(vic) + 2)
        setPosition(getPlayerEnt(), Entity.getX(vic) - 1.4, Entity.getY(vic) + 1, Entity.getZ(vic) - .8)
        var hit = getYaw() + 90;
        var hitY = getPitch() - 180;
        x = Math.cos(hit * (Math.PI / 180));
        y = Math.sin(hitY * (Math.PI / 180));
        z = Math.sin(hit * (Math.PI / 180));
        setVelX(Player.getEntity(), x * 1);
        setVelY(Player.getEntity(), y * 1);
        setVelZ(Player.getEntity(), z * 1);
        setPosition(getPlayerEnt(), Entity.getX(vic) + 1, Entity.getY(vic) + 1.9, Entity.getZ(vic) + 1)
        setPosition(getPlayerEnt(), Entity.getX(vic) - 1.8, Entity.getY(vic) + 1.6, Entity.getZ(vic) - .9)
        var hit = getYaw() + 80;
        var hitY = getPitch() - 180;
        x = Math.cos(hit * (Math.PI / 180));
        y = Math.sin(hitY * (Math.PI / 180));
        z = Math.sin(hit * (Math.PI / 180));
        setVelX(Player.getEntity(), x * -2);
        setVelY(Player.getEntity(), y * -2);
        setVelZ(Player.getEntity(), z * -2);
        setPosition(getPlayerEnt(), Entity.getX(vic) + 1.6, Entity.getY(vic) + 1.2, Entity.getZ(vic) + 1.3)
        setPosition(getPlayerEnt(), Entity.getX(vic) - 1.4, Entity.getY(vic) + 1.5, Entity.getZ(vic) - .6)
    }
    if (att == Player.getEntity() && aas1 && Entity.getHealth(vic) > 0) {
        var ent = Player.getPointedEntity();
        var ent = getNearestEntity(8)
        if (ent != null) crosshairAimAt(ent);
    }
    if (att == Player.getEntity() && rtp1 && Entity.getHealth(vic) > 0) {
        var hit = getYaw() + 90;
        var hitY = getPitch() - 180;
        x = Math.cos(hit * (Math.PI / 180));
        y = Math.sin(hitY * (Math.PI / 180));
        z = Math.sin(hit * (Math.PI / 180));
        setVelX(Player.getEntity(), x * -2);
        setVelY(Player.getEntity(), y * -2);
        setVelZ(Player.getEntity(), z * -2);
    }
    if (att == Player.getEntity() && blj1 && Entity.getHealth(vic) > 0) {
        var hit = getYaw() + 90;
        var hitY = getPitch() - 180;
        x = Math.cos(hit * (Math.PI / 180));
        y = Math.sin(hitY * (Math.PI / 180));
        z = Math.sin(hit * (Math.PI / 180));
        setVelX(Player.getEntity(), x * 1);
        setVelZ(Player.getEntity(), z * 1);
    }
    if (att == Player.getEntity() && bst1 && Entity.getHealth(vic) > 0) {
        var hit = getYaw() + 45;
        var hitY = getPitch() - 180;
        x = Math.cos(hit * (Math.PI / 180));
        y = Math.sin(hitY * (Math.PI / 180));
        z = Math.sin(hit * (Math.PI / 180));
        setVelY(Player.getEntity(), y * 0.7);
        setVelX(Player.getEntity(), x * 0.6);
        setVelZ(Player.getEntity(), z * 0.6);
    }
}

function getNearestEntity(maxrange) {
    var mobs = Entity.getAll();
    var players = Server.getAllPlayers();
    var small = maxrange;
    var ent = null;
    for (var i = 0; i < mobs.length; i++) {
        var x = Entity.getX(mobs[i]) - getPlayerX();
        var y = Entity.getY(mobs[i]) - getPlayerY();
        var z = Entity.getZ(mobs[i]) - getPlayerZ();
        var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
        if (dist < small && dist > 0 && Entity.getEntityTypeId(mobs[i]) <= 63 && Entity.getHealth(mobs[i]) >= 1) {
            small = dist;
            ent = mobs[i];
        }
    }
    for (var i = 0; i < players.length; i++) {
        var x = Entity.getX(players[i]) - getPlayerX();
        var y = Entity.getY(players[i]) - getPlayerY();
        var z = Entity.getZ(players[i]) - getPlayerZ();
        var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
        if (dist < small && dist > 0 && Entity.getHealth(players[i]) >= 1) {
            small = dist;
            ent = players[i];
        }
    }
    return ent;
}

function crosshairAimAt(ent, pos) {
    if (ent != null) {
        var x = Entity.getX(ent) - getPlayerX();
        var y = Entity.getY(ent) - getPlayerY();
        var z = Entity.getZ(ent) - getPlayerZ();
        if (pos != null && pos instanceof Array) {

            x = Entity.getX(ent) - pos[0];
            y = Entity.getY(ent) - pos[1];
            z = Entity.getZ(ent) - pos[2];
        }
        if (Entity.getEntityTypeId(ent) != 63)
            y += 0.5;
        var a = 0.5 + Entity.getX(ent);
        var b = Entity.getY(ent);
        var c = 0.5 + Entity.getZ(ent);
        var len = Math.sqrt(x * x + y * y + z * z);
        var y = y / len;
        var pitch = Math.asin(y);
        pitch = pitch * 180.0 / Math.PI;
        pitch = -pitch;
        var yaw = -Math.atan2(a - (Player.getX() + 0.5), c - (Player.getZ() + 0.5)) * (180 / Math.PI);
        if (pitch < 89 && pitch > -89) {
            Entity.setRot(Player.getEntity(), yaw, pitch);
        }
    }
}

function nearArrow(range) {
    var entities = Entity.getAll();
    var small = range;
    var ent = null;
    for (var i = 0; i < entities.length; i++) {
        var x = Entity.getX(entities[i]) - getPlayerX();
        var y = Entity.getY(entities[i]) - getPlayerY();
        var z = Entity.getZ(entities[i]) - getPlayerZ();
        var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));

        if (dist < small && dist > 0) {
            small = dist;
            ent = entities[i];
        }
    }
    return ent;
}
///////////////////////////////////////////
//This Its The Combat/Movement Part Code!//
//Enjoy                                  //
//Made By @SkidClient                    //
//Your Using Skid Client B3              //
///////////////////////////////////////////

function modTick() {
    if (aimbot) {
        var ent = getNearestEntity(7)
        if (ent != null) crosshairAimAt(ent);

    }

    var px = Player.getX();
    var py = Player.getY();
    var pz = Player.getZ();
    var x = Player.getX();
    var y = Player.getY();
    var z = Player.getZ();

    if (at1) {
        setTile(getPlayerX(), getPlayerY() - 1, getPlayerZ(), 50);
    }
    if (gr1) {
        setTile(getPlayerX(), getPlayerY() - 3, getPlayerZ(), 51);
    }
    if (hitboxed) {
        var ent = getNearestEntity(8);
        Entity.setCollisionSize(ent, 8, 7);
    }
    if (jesus) {
        if (Utils.Player.isInWater())
            setVelY(getPlayerEnt(), 0.25);
        if (Utils.Player.isInWater())
            setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 0.8);
        if (Utils.Player.isInWater())
            setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 0.8);
    }
    if (ff1) {
        if (Utils.Player.isInWater())
            setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.2);
        if (Utils.Player.isInWater())
            setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.2);
    }
    if (fi1) {
        if (Utils.Player.isInIce())
            setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1);
        if (Utils.Player.isInIce())
            setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1);
    }
    if (bj1) {
        if (Utils.Player.isInWater())
            setVelY(getPlayerEnt(), 0.0);
    }
    if (motion) {
        if (Utils.Player.onGround())
            setVelY(getPlayerEnt(), 0.0);
        if (Utils.Player.onGround())
            setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1);
        if (Utils.Player.onGround())
            setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1);
    }
    if (js1 && Utils.Player.isInWater()) {
        setVelY(getPlayerEnt(), 0.1);
        setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.3);
        setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.3);
    }
    if (sw1) {
        Entity.setSneaking(getPlayerEnt(), true);
    }
    if (mh1) {
        if (Utils.Player.onGround())
            setVelY(getPlayerEnt(), 0.2);
        if (Utils.Player.onGround())
            setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.4);
        if (Utils.Player.onGround())
            setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.4);
    }
    if (gdglidess) {
        setVelY(getPlayerEnt(), -0.15);
        setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.06);
        setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.06);
    }
    if (mdglidess) {
        setVelY(getPlayerEnt(), -0.001);
    }
    if (sc1) {
        if (!Player.getCarriedItem() == 0) {
            Level.setTile(getPlayerX(), getPlayerY() - 2, getPlayerZ(), Player.getCarriedItem(), 50);
            setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 0.55);
            setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 0.55);
        }
    }
    if (nf1) {
        if (Utils.Player.isFall()) {
            setVelY(getPlayerEnt(), -200);
        }
    }
    if (glidess) {
        if (Utils.Player.isFall()) {
            setPosition(getPlayerEnt(), px, py + 0.19, pz);
            setVelY(getPlayerEnt(), -0.3);
        }
    }
    if (ahunger) {
        Player.setHunger(20);
    }
    if (regen) {
        Player.setHealth(20);
    }
    if (sb1) {
        setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.08);
        setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.08);
        if (tima !== 0) {
            tima--;
        }
        if (tima == 0) {
            tima = 9;
            var hit = getYaw() + 90;
            var hitY = getPitch() - 180;
            x = Math.cos(hit * (Math.PI / 180));
            y = Math.sin(hitY * (Math.PI / 180));
            z = Math.sin(hit * (Math.PI / 180));
            setVelX(Player.getEntity(), x * 1);
            setVelY(Player.getEntity(), y * 1);
            setVelZ(Player.getEntity(), z * 1);
        }
    }
    if (lg1) {
        setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.09);
        setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.09);
    }
    if (bf1) {
        setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.08);
        setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.08);
        if (time !== 0) {
            time--;
        }
        if (time == 0) {
            time = 9;
            setVelY(getPlayerEnt(), 0.33);
        }
    }
    if (pe1) {
        var ent = getNearestEntity(8)
        var hit = getYaw() + 90;
        var hitY = getPitch() - 180;
        x = Math.cos(hit * (Math.PI / 180));
        y = Math.sin(hitY * (Math.PI / 180));
        z = Math.sin(hit * (Math.PI / 180));
        setVelX(Player.getEntity(), x * -2);
        setVelY(Player.getEntity(), y * -2);
        setVelZ(Player.getEntity(), z * -2);
    }
    if (csb1) {
        setVelY(getPlayerEnt(), 0.0)
        var playerDir = [0, 0, 0];
        toDirectionalVector(playerDir, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -1);
        setVelY(getPlayerEnt(), 0.0)
        setVelX(getPlayerEnt(), 0.5 * playerDir[0]);
        setVelZ(getPlayerEnt(), 0.5 * playerDir[2]);
    }
    if (bz1) {
        if (getCarriedItem() == 261) {
            ModPE.setFov(25)
        } else {
            ModPE.resetFov();
        }
    }
    if (dv1) {
        Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY(), Player.getPointedBlockZ())
    }
    if (ab1) {
        setVelY(getPlayerEnt(), 0.4)
        setTile(getPlayerX(), getPlayerY() - 1, getPlayerZ(), 4);
    }
    if (dj1) {
        if (Utils.Player.isFall()) {
            setVelY(getPlayerEnt(), 1);
        }
    }
    if (ljj1) {
        if (Utils.Player.isAutoEagle()) {
            Entity.setSneaking(getPlayerEnt(), true);
        }
    }
    if (ar1) {
        Player.setArmorSlot(0, 310, 0);
        Player.setArmorSlot(1, 311, 0);
        Player.setArmorSlot(2, 312, 0);
        Player.setArmorSlot(3, 313, 0);
    }
    if (nt1) {
        var ent = getNearestEntity(30);
        ModPE.showTipMessage(ChatColor.WHITE + "Player Detected: " + ChatColor.RED + Player.getName(ent) + ChatColor.RED + "");
    }
    if (as1) {
        var slotId = 0;
        var getInvSword = Player.getInventorySlot(slotId);
        if (getInvSword == 276 || getInvSword == 268 || getInvSword == 283 || getInvSword == 267 || getInvSword == 272) {
            var invSword = slotId;
        } else {
            slotId++;
        }
        if (slotId = 27) {
            slotId = 0;
        }
        var ent = getNearestEntity(8);
        Player.setSelectedSlotId(invSword);
    }
    if (saa1) {
        var ent = getNearestEntity(8);
        if (ent != null && Player.getName(ent) != "" && Player.getName(ent) != " " && Player.getName(ent)) {
            var hit = getYaw() + 45;
            var hitY = getPitch() - 180;
            x = Math.cos(hit * (Math.PI / 180));
            y = Math.sin(hitY * (Math.PI / 180));
            z = Math.sin(hit * (Math.PI / 180));
            setVelX(Player.getEntity(), x * 0.6);
            setVelZ(Player.getEntity(), z * 0.6);
        }
    }
    if (css1) {
        if (Player.getPointedBlockId() == 54) {
            Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY(), Player.getPointedBlockZ(), true);
        }
    }
    if (bb1) {
        if (Player.getPointedBlockId() == 26) {
            Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY(), Player.getPointedBlockZ(), true);
        }
    }
    if (rg1) {
        var pX = Player.getX();
        var pZ = Player.getZ();
        if (Entity.getHealth(getPlayerEnt()) != 20 && Player.getHunger() == 20 && regenX == pX || regenZ == pZ) {
            ModPE.setGameSpeed(120);
        } else if (Entity.getHealth(getPlayerEnt()) == 20 && regenX != pX || regenZ != pZ) {
            ModPE.setGameSpeed(20);
        }
    }
    if (ea1) {
        var ent = getNearestEntity(8);
        if (ent != null && Player.getName(ent) != "" && Player.getName(ent) != " " && Player.getName(ent)) {
            var hit = getYaw() + 90;
            var hitY = getPitch() - 180;
            x = Math.cos(hit * (Math.PI / 180));
            y = Math.sin(hitY * (Math.PI / 180));
            z = Math.sin(hit * (Math.PI / 180));
            setVelX(Player.getEntity(), x * -2);
            setVelY(Player.getEntity(), y * -2);
            setVelZ(Player.getEntity(), z * -2);
        }
    }
    if (nbb1) {
        if (Utils.Player.onGround()) {
            setVelY(getPlayerEnt(), 0.3)
            setVelY(getPlayerEnt(), 0.0);
        }
    }
    if (fl1) {
        if (getTile(getPlayerX(), getPlayerY() + 1, getPlayerZ()) == 65) {
            setVelY(getPlayerEnt(), ladderspeed);
            Entity.setPosition(getPlayerEnt(), Player.getX(), Player.getY() + ladderspeed, Player.getZ());
        }
    }
    if (fv1) {
        if (getTile(getPlayerX(), getPlayerY() + 1, getPlayerZ()) == 106) {
            setVelY(getPlayerEnt(), vinespeed);
            Entity.setPosition(getPlayerEnt(), Player.getX(), Player.getY() + vinespeed, Player.getZ());
        }
    }
    if (nw1) {
        if (Player.getPointedBlockId() == 30) {
            var hit = getYaw() + 90;
            var hitY = getPitch() - 180;
            x = Math.cos(hit * (Math.PI / 180));
            y = Math.sin(hitY * (Math.PI / 180));
            z = Math.sin(hit * (Math.PI / 180));
            setVelX(Player.getEntity(), x * 0.6);
            setVelZ(Player.getEntity(), z * 0.6);
        }
    }
    if (asb1) {
        var snowball = nearArrow(9);
        if (snowball != null && Entity.getEntityTypeId(snowball) == EntityType.SNOWBALL) {
            var hit = getYaw() + 90;
            var hitY = getPitch() - 180;
            x = Math.cos(hit * (Math.PI / 180));
            y = Math.sin(hitY * (Math.PI / 180));
            z = Math.sin(hit * (Math.PI / 180));
            setVelX(Player.getEntity(), x * -2);
            setVelY(Player.getEntity(), y * -2);
            setVelZ(Player.getEntity(), z * -2);
        }
    }
    if (da1) {
        var arrow = nearArrow(9);
        if (arrow != null && Entity.getEntityTypeId(arrow) == EntityType.ARROW) {
            var hit = getYaw() + 90;
            var hitY = getPitch() - 180;
            x = Math.cos(hit * (Math.PI / 180));
            y = Math.sin(hitY * (Math.PI / 180));
            z = Math.sin(hit * (Math.PI / 180));
            setVelX(Player.getEntity(), x * -2);
            setVelY(Player.getEntity(), y * -2);
            setVelZ(Player.getEntity(), z * -2);
        }
    }
    if (bgl1 == true && Entity['isSneaking'](Player['getEntity']()) == true) {
        setVelY(getPlayerEnt(), -0.004);
        var playerDir = [0, 0, 0];
        toDirectionalVector(playerDir, (getYaw() + 90) * Math['PI'] / 180, getPitch() * Math['PI'] / 180 * -1);
        setVelX(getPlayerEnt(), 0.6 * playerDir[0]);
        setVelZ(getPlayerEnt(), 0.6 * playerDir[2])
    }
    if (pvp1) {
        var player = getPlayerEnt();
        var yaw = Math.floor(Entity.getYaw(player));
        var pitch = Math.floor(Entity.getPitch(player));
        if (pitch <= 2) {
            Entity.setRot(player, yaw, 1)
        }
    }

    if (farbotss) {
        var ent = getNearestEntity(500)
        if (ent != null) crosshairAimAt(ent);

    }
    if (fw1) {
        var x = Player.getX();
        var y = Player.getY();
        var z = Player.getZ();
        if (getTile(x, y - 1, z) == 8) {
            setTile(x, y - 1, z, 79, 0);
        }
        if (getTile(x, y - 1, z) == 9) {
            setTile(x, y - 1, z, 79, 0);
        }
        if (getTile(x, y - 1, z) == 10) {
            setTile(x, y - 1, z, 4, 0);
        }
        if (getTile(x, y - 1, z) == 11) {
            setTile(x, y - 1, z, 4, 0);
        }
        if (getTile(x, y, z) == 8) {
            setTile(x, y, z, 79, 0);
            setPosition(getPlayerEnt(), x, y + 1, z);
        }
        if (getTile(x, y, z) == 9) {
            setTile(x, y, z, 79, 0);
            setPosition(getPlayerEnt(), x, y + 1, z);
        }
        if (getTile(x, y, z) == 10) {
            setTile(x, y, z, 4, 0);
            setPosition(getPlayerEnt(), x, y + 1, z);
        }
        if (getTile(x, y, z) == 11) {
            setTile(x, y, z, 4, 0);
            setPosition(getPlayerEnt(), x, y + 1, z);
        }
    }
    if (ir1) {
        ir3 = getNearestEntity(15);
        if (ir3 != null && Entity.getEntityTypeId(ir3) == EntityType.PLAYER) {
            setPosition(getPlayerEnt(), Entity.getX(ir3), Entity.getY(ir3) + 2, Entity.getZ(ir3));
        }
    }
    if (ftp1) {
        ftp3 = getNearestEntity(10);
        if (ftp3 != null && Entity.getEntityTypeId(ftp3) == EntityType.PLAYER) {
            setPosition(getPlayerEnt(), Entity.getX(ftp3) - 5, Entity.getY(ftp3) + 1, Entity.getZ(ftp3));
        }
    }
    if (az1) {
        var playerDir = [0, 0, 0];
        toDirectionalVector(playerDir, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -1);
        setVelX(getPlayerEnt(), playerDir[0]);
        setVelY(getPlayerEnt(), 0.45);
        setVelZ(getPlayerEnt(), playerDir[2]);
        setVelY(getPlayerEnt(), -0.4);
        if (time !== 0) {
            time--;
        }
        if (time == 0) {
            time = 3;
            setVelX(getPlayerEnt(), 0);
            setVelZ(getPlayerEnt(), 0);
            setVelY(getPlayerEnt(), 0.3);
        }
    }
    if (stepss && Utils.Player.isCollidedHorizontally()) {
        Entity.setPositionRelative(getPlayerEnt(), 0, 1.6, 0);
    }
    if (sp1 && Utils.Player.isCollidedHorizontally()) {
        setVelY(getPlayerEnt(), 0.4)
    }
    if (bhopll) {
        if (Utils.Player.onGround()) {
            ModPE.setGameSpeed(40)
            setVelY(getPlayerEnt(), 0.4)
        }
    }
    if (yp1) {
        if (Utils.Player.onGround())
            setVelY(getPlayerEnt(), 0.09);
        if (Utils.Player.onGround())
            setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.4);
        if (Utils.Player.onGround())
            setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.4);
    }
    if (btp1) {
        if (Utils.Player.onGround())
            setVelY(getPlayerEnt(), 0.4);
        if (Utils.Player.onGround())
            setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 4.8);
        if (Utils.Player.onGround())
            setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 4.8);
    }
    if (bhopl) {
        if (Utils.Player.onGround())
            setVelY(getPlayerEnt(), 0.4);
        if (Utils.Player.onGround())
            setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.4);
        if (Utils.Player.onGround())
            setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.4);
    }
    if (spamss) {
        ModPE.showTipMessage("\n" + "§aYour Health: §4" + Entity.getHealth(getPlayerEnt()));
    }
    if (quickescaped) {
        var yaw = Entity.getYaw(getPlayerEnt());
        setVelX(getPlayerEnt(), -0.49 * Math.sin(yaw / 180 * Math.PI));
        setVelZ(getPlayerEnt(), 0.49 * Math.cos(yaw / 180 * Math.PI));
    }
    if (ddj1) {
        if (Utils.Player.overGround())
            setVelY(getPlayerEnt(), 0.4);
    }

    if (livecored) {
        ModPE.showTipMessage("Â§a> Your Coordinates are:\nx: " + Math.floor(Player.getX()) + " y: " + Math.floor(Player.getY() - 1) + " z: " + Math.floor(Player.getZ()));
    }
    if (tnt1) {
        setVelY(getPlayerEnt(), 0.4);
    }
    if (antikbss || Entity.getHealth(getPlayerEnt()) <= 0) {
        if (this.tick > 0) {
            tick--;
        } else {
            Entity.setImmobile(getPlayerEnt(), false);
        }
        if (this.health > Entity.getHealth(getPlayerEnt())) {
            Entity.setImmobile(getPlayerEnt(), true);
            this.tick = 1;
        }
        this.tick = 0;
        this.health = Entity.getHealth(getPlayerEnt());
    }
    if (ndglidess) {
        setVelY(getPlayerEnt(), 0.00000001);
    }
    if (ljc1) {
        setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * sboost);
        setVelY(getPlayerEnt(), Entity.getVelY(getPlayerEnt()) * jboost);
        setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * sboost);
        if (Utils.Player.isFall())
            setVelY(getPlayerEnt(), Entity.getVelY(getPlayerEnt()) * fboost);
    }
    if (lh1) {

        if (Entity.getVelY(getPlayerEnt()) < -0.1) {
            var playerDir = [0, 0, 0];
            toDirectionalVector(playerDir, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -1);
            setVelX(getPlayerEnt(), 4 * playerDir[0]);
            setVelZ(getPlayerEnt(), 4 * playerDir[2]);
        }
        if (Entity.getVelY(getPlayerEnt()) < 0.35 && Entity.getVelY(getPlayerEnt()) > 0.2 && can == 1 && canGetHP == 1) {
            setVelY(getPlayerEnt(), 0.6);
            can = 2;
            HP = Entity.getHealth(getPlayerEnt());
            canGetHP = 0;
        }
        if (Entity.getVelY(getPlayerEnt()) > gravity && can == 2) {
            Player.setHealth(HP);
            canGetHP = 1;
            can = 0;
        }
        if (Entity.getVelY(getPlayerEnt()) == gravity && can == 0) {
            Player.setHealth(HP);
            canGetHP = 1;
            can = 1;
        }
    }
    if (aw1) {
        var playerDir = [0, 0, 0];
        toDirectionalVector(playerDir, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -1);
        setVelX(getPlayerEnt(), 0.4 * playerDir[0]);
        setVelZ(getPlayerEnt(), 0.4 * playerDir[2]);
    }
    if (jp1) {
        var hit = getYaw() + 90;
        var hitY = getPitch() - 180;
        x = Math.cos(hit * (Math.PI / 180));
        y = Math.sin(hitY * (Math.PI / 180));
        z = Math.sin(hit * (Math.PI / 180));
        setVelX(Player.getEntity(), x * 1);
        setVelY(Player.getEntity(), y * 1);
        setVelZ(Player.getEntity(), z * 1);
    }
    if (cspeedss) {
        //CrouchSpeed code from NNeBBuRR (VC Team)
        if (Entity.isSneaking(Player.getEntity()) == true) {
            setVelY(getPlayerEnt(), -100.0);
            setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.7);
            setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.7);
        }
    }
}

function useItem(x, y, z, itemid, blockid, side, itemDamage, blockDamage) {
    if (taptowerss) {
        setVelY(getPlayerEnt(), 0.4);
    }
    if (ljj1) {
        setVelY(getPlayerEnt(), 0.100);
    }
    if (sa1) {
        explode(getPlayerX(), getPlayerY(), getPlayerZ(), 2);
    }
    if (ls1) {
        var yaw = Entity.getYaw(getPlayerEnt());
        setVelX(getPlayerEnt(), -0.49 * Math.sin(yaw / 180 * Math.PI));
        setVelZ(getPlayerEnt(), 0.49 * Math.cos(yaw / 180 * Math.PI));
    }
    if (tb1) {
        var hit = getYaw() + 90;
        var hitY = getPitch() - 180;
        x = Math.cos(hit * (Math.PI / 180));
        y = Math.sin(hitY * (Math.PI / 180));
        z = Math.sin(hit * (Math.PI / 180));
        setVelX(Player.getEntity(), x * 1);
        setVelY(Player.getEntity(), y * 1);
        setVelZ(Player.getEntity(), z * 1);
    }
    if (taptpss && getTile(x, y + 1, z) == 0 && getTile(x, y + 2, z) == 0) {
        Entity.setPosition(Player.getEntity(), x + 0.5, y + 2.63, z + 0.5);
    }
    if (ch1 && Player.getCarriedItem() == 0) {
        Level.setTile(x, y, z, 0, 0);
        Level.setTile(x, y - 1, z, 0, 0);
    }
    if (ta1) {
        ta3 = getNearestEntity(8);
        if (ta3 != null && Entity.getEntityTypeId(ta3) == EntityType.PLAYER) {
            setPosition(getPlayerEnt(), Entity.getX(ta3), Entity.getY(ta3) + 1, Entity.getZ(ta3));
        }
    }
    if (fb1) {
        if (side == BlockFace.NORTH) {
            Entity.setPositionRelative(getPlayerEnt(), 0, 0, -1);
        } else if (side == BlockFace.SOUTH) {
            Entity.setPositionRelative(getPlayerEnt(), 0, 0, 1);
        } else if (side == BlockFace.WEST) {
            Entity.setPositionRelative(getPlayerEnt(), -1, 0, 0);
        } else if (side == BlockFace.EAST) {
            Entity.setPositionRelative(getPlayerEnt(), 1, 0, 0);
        } else if (side == BlockFace.UP) {
            Entity.setPositionRelative(getPlayerEnt(), 0, 1, 0);
        }
    }
}

function rptask() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            new android.os.Handler().postDelayed(new java.lang.Runnable({
                run: function() {
                    if (ab1) {
                        var ent = getNearestEntity(8)
                        if (ent != null) crosshairAimAt(ent);
                    }
                    if (abb1) {
                        var ent = getNearestEntity(9)
                        if (ent != null) crosshairAimAt(ent);
                    }
                    if (abbb1) {
                        var ent = getNearestEntity(10)
                        if (ent != null) crosshairAimAt(ent);
                    }
                    if (abbbb1) {
                        var ent = getNearestEntity(12)
                        if (ent != null) crosshairAimAt(ent);
                    }
                    if (hj1) {
                        var ent = getNearestEntity(15);
                        if (ent != null) crosshairAimAt(ent);
                        var yaw = Entity.getYaw(getPlayerEnt());
                        setVelX(getPlayerEnt(), -0.49 * Math.sin(yaw / 180 * Math.PI));
                        setVelZ(getPlayerEnt(), 0.49 * Math.cos(yaw / 180 * Math.PI));
                    }

                    nx = getPlayerX();
                    ny = getPlayerY();
                    nz = getPlayerZ();
                    eval(rptask())
                }
            }), 900 / 70)
        }
    }))
}
rptask();


function showMenuBtn7() {

    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var layout = new LinearLayout(ctx);
                layout.setOrientation(1);
                var menuBtn7 = new Button(ctx);
                menuBtn7.setText("Aimaura");
                menuBtn7.setTextColor(android.graphics.Color.WHITE);
                menuBtn7.setBackground(bg2);
                menuBtn7.getBackground().setAlpha(100);
                menuBtn7.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!aimed) {
                            aimbot = true;
                            aimed = true;
                            print("Aim on ")
                            clientMessage('By Pokey And GSOFT"')
                        } else {
                            print("Aim Off ")
                            aimbot = false;
                            aimed = false;
                        }
                    }
                }));
                layout.addView(menuBtn7);

                GUI7 = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
                GUI7.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
                GUI7.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.BOTTOM, 0, 0);
            } catch (err) {
                Toast.makeText(ctx, "An error occured: " + err, 1).show();
            }
        }
    }));
}

function showMenuBtn8() {

    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var layout = new LinearLayout(ctx);
                layout.setOrientation(1);
                var menuBtn8 = new Button(ctx);
                menuBtn8.setText("Tpaura");
                menuBtn8.setTextColor(android.graphics.Color.WHITE);
                menuBtn8.setBackground(bg2);
                menuBtn8.getBackground().setAlpha(100);
                menuBtn8.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!vtped) {
                            vtped = true;
                            vport = true;
                            print("TpAura on ")
                        } else {
                            print("TpAura Off ")
                            vtped = false;
                            vport = false;
                        }
                    }
                }));
                layout.addView(menuBtn8);

                GUI8 = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
                GUI8.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
                GUI8.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.BOTTOM, 0, 0);
            } catch (err) {
                Toast.makeText(ctx, "An error occured: " + err, 1).show();
            }
        }
    }));
}

function showMenuBtn10() {

    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var layout = new LinearLayout(ctx);
                layout.setOrientation(1);
                var menuBtn10 = new Button(ctx);
                menuBtn10.setText("HitBox");
                menuBtn10.setTextColor(android.graphics.Color.WHITE);
                menuBtn10.setBackground(bg2);
                menuBtn10.getBackground().setAlpha(100);
                menuBtn10.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!hitboxed) {
                            hitboxss = true;
                            hitboxed = true;
                            print("Hitbox - ON")
                        } else {
                            print("Hitbox - OFF")
                            hitboxss = false;
                            hitboxed = false;
                        }
                    } //@SkidClient
                }));
                layout.addView(menuBtn10);

                GUI10 = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
                GUI10.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
                GUI10.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 135, 0);
            } catch (err) {
                Toast.makeText(ctx, "An error occured: " + err, 1).show();
            }
        }
    }));
} //@SkidClient

function showMenuBtn11() {

    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var layout = new LinearLayout(ctx);
                layout.setOrientation(1);
                var menuBtn11 = new Button(ctx);
                menuBtn11.setText("FOV");
                menuBtn11.setTextColor(android.graphics.Color.WHITE);
                menuBtn11.setBackground(bg2);
                menuBtn11.getBackground().setAlpha(100);
                menuBtn11.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!gmSwitchedddd) {
                            ModPE.setFov(98)
                            gmSwitchedddd = true;
                            print("Rrach on")
                        } else {
                            print("Reach off") //@SkidClient
                            ModPE.resetFov()
                            gmSwitchedddd = false;
                        }
                    }
                }));
                layout.addView(menuBtn11);

                GUI11 = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
                GUI11.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
                GUI11.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, 0, 80);
            } catch (err) {
                Toast.makeText(ctx, "An error occured: " + err, 1).show();
            }
        }
    }));
} //@SkidClient

function showCrossBtn() {
    //@SkidClient
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var layout = new LinearLayout(ctx);
                layout.setOrientation(1);
                var AimBtn = new Button(ctx);
                AimBtn.setText("<¤>");
                AimBtn.setTextColor(Color.BLUE);
                AimBtn.setTextSize(35);
                AimBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                AimBtn.setPadding(10, 10, 10, 10);
                AimBtn.getBackground().setAlpha(100);
                AimBtn.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {}
                }));
                layout.addView(AimBtn);
                //@SkidClient
                GUIv = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
                GUIv.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUIv.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, 0, 0);
            } catch (err) {
                Toast.makeText(ctx, "An error occured: " + err, 1).show();
            }
        }
    }));
}

var tos;

function showToS() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var tosLayout = new android.widget.LinearLayout(ctx);
                var tosScroll = new android.widget.ScrollView(ctx);
                var tosLayout1 = new android.widget.LinearLayout(ctx);
                tosLayout.setOrientation(1);
                tosLayout1.setOrientation(1);
                tosScroll.addView(tosLayout);
                tosLayout1.addView(tosScroll);
                tosLayout.setBackground(bg);

                var tosInfo = new Button(ctx);
                tosInfo.setTextSize(15);
                tosInfo.setText("Skid Client");
                tosInfo.setTextColor(android.graphics.Color.WHITE);
                tosInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                tosInfo.getBackground().setAlpha(150);
                tosInfo.setGravity(Gravity.CENTER);
                tosLayout.addView(tosInfo);



                var tosInfo = new Button(ctx);
                tosInfo.setTextSize(15);
                tosInfo.setText("Made By @SkidClient");
                tosInfo.setTextColor(android.graphics.Color.WHITE);
                tosInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                tosInfo.getBackground().setAlpha(150);
                tosInfo.setGravity(Gravity.CENTER);
                tosLayout.addView(tosInfo);

                var tosInfo = new TextView(ctx);
                tosInfo.setTextSize(15);
                tosInfo.setText("Do Not Skid This Client!");
                tosInfo.setTextColor(android.graphics.Color.WHITE);
                tosInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                tosInfo.getBackground().setAlpha(150);
                tosInfo.setGravity(Gravity.CENTER);
                tosLayout.addView(tosInfo);

                var tosInfo = new TextView(ctx);
                tosInfo.setTextSize(15);
                tosInfo.setText("Some Code Its From Medusa,DragOP,etc");
                tosInfo.setTextColor(android.graphics.Color.WHITE);
                tosInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                tosInfo.getBackground().setAlpha(150);
                tosInfo.setGravity(Gravity.CENTER);
                tosLayout.addView(tosInfo);

                var tosInfo = new Button(ctx);
                tosInfo.setTextSize(15);
                tosInfo.setText("Added");
                tosInfo.setTextColor(android.graphics.Color.WHITE);
                tosInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                tosInfo.getBackground().setAlpha(150);
                tosInfo.setGravity(Gravity.CENTER);
                tosLayout.addView(tosInfo);

                var tosInfo = new TextView(ctx);
                tosInfo.setTextSize(15);
                tosInfo.setText("Many Hacks");
                tosInfo.setTextColor(android.graphics.Color.WHITE);
                tosInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                tosInfo.getBackground().setAlpha(150);
                tosInfo.setGravity(Gravity.CENTER);
                tosLayout.addView(tosInfo);

                var tosInfo = new TextView(ctx);
                tosInfo.setTextSize(15);
                tosInfo.setText("InPVP Bypass");
                tosInfo.setTextColor(android.graphics.Color.WHITE);
                tosInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                tosInfo.getBackground().setAlpha(150);
                tosInfo.setGravity(Gravity.CENTER);
                tosLayout.addView(tosInfo);

                var tosInfo = new TextView(ctx);
                tosInfo.setTextSize(15);
                tosInfo.setText("Airjump");
                tosInfo.setTextColor(android.graphics.Color.WHITE);
                tosInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                tosInfo.getBackground().setAlpha(150);
                tosInfo.setGravity(Gravity.CENTER);
                tosLayout.addView(tosInfo);

                var tosInfo = new TextView(ctx);
                tosInfo.setTextSize(15);
                tosInfo.setText("Bedbreaker");
                tosInfo.setTextColor(android.graphics.Color.WHITE);
                tosInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                tosInfo.getBackground().setAlpha(150);
                tosInfo.setGravity(Gravity.CENTER);
                tosLayout.addView(tosInfo);

                var tosInfo = new TextView(ctx);
                tosInfo.setTextSize(15);
                tosInfo.setText("Glide Fixed");
                tosInfo.setTextColor(android.graphics.Color.WHITE);
                tosInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                tosInfo.getBackground().setAlpha(150);
                tosInfo.setGravity(Gravity.CENTER);
                tosLayout.addView(tosInfo);

                var tosInfo = new TextView(ctx);
                tosInfo.setTextSize(15);
                tosInfo.setText("Speed");
                tosInfo.setTextColor(android.graphics.Color.WHITE);
                tosInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                tosInfo.getBackground().setAlpha(150);
                tosInfo.setGravity(Gravity.CENTER);
                tosLayout.addView(tosInfo);

                var tosInfo = new TextView(ctx);
                tosInfo.setTextSize(15);
                tosInfo.setText("-FastIce");
                tosInfo.setTextColor(android.graphics.Color.WHITE);
                tosInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                tosInfo.getBackground().setAlpha(150);
                tosInfo.setGravity(Gravity.CENTER);
                tosLayout.addView(tosInfo);

                var tosInfo = new TextView(ctx);
                tosInfo.setTextSize(15);
                tosInfo.setText("WWW.SKIDMCPE.ML");
                tosInfo.setTextColor(android.graphics.Color.WHITE);
                tosInfo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                tosInfo.getBackground().setAlpha(150);
                tosInfo.setGravity(Gravity.CENTER);
                tosLayout.addView(tosInfo);


                var yesBtn = new android.widget.Button(ctx);
                yesBtn.setText("Start Hacking");
                yesBtn.setTextColor(android.graphics.Color.RED);
                yesBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
                yesBtn.getBackground().setAlpha(150);
                yesBtn.setTextSize(15);
                yesBtn.setGravity(android.view.Gravity.CENTER);
                yesBtn.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        tos.dismiss();
                    }
                }));
                tosLayout.addView(yesBtn);

                tos = new PopupWindow(tosLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx.getWindowManager().getDefaultDisplay().getHeight() / 2);
                tos.setAnimationStyle(android.R.style.Animation_InputMethod);
                tos.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                tos.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
            } catch (error) {
                print("An error occured: " + error);
            }
        }
    }));
}
showToS();

function showtextview() {

    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var layout = new LinearLayout(ctx);
                layout.setOrientation(1);

                //WaterMark

                var menuBtn4 = new TextView(ctx);
                menuBtn4.setTextSize(18);
                menuBtn4.setText("SKID");
                menuBtn4.setTextColor(android.graphics.Color.BLUE);
                menuBtn4.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                menuBtn4.getBackground().setAlpha(150);
                menuBtn4.setGravity(Gravity.CENTER);
                layout.addView(menuBtn4);

                var textvieww = new android.widget.TextView(ctx);
                textvieww.setTextSize(15);
                textvieww.setText('Combat');
                textvieww.setGravity(android.view.Gravity.CENTER);
                textvieww.setBackground(bgoff);
                textvieww.setTextColor(android.graphics.Color.WHITE);
                textvieww.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!Gui1) {
                            mainMenu4();
                            textvieww.setBackground(bgon);
                            Gui1 = true;
                        } else {
                            menu2.dismiss();
                            textvieww.setBackground(bgoff);
                            Gui1 = false;
                        }
                    }
                }));
                textvieww.setOnTouchListener(new android.view.View.OnTouchListener({ // ability to move from dragop
                    onTouch: function(view, motionEvent) {
                        try {
                            if (!moving) return false;
                            switch (motionEvent.getAction()) {
                                case android.view.MotionEvent.ACTION_DOWN:
                                    dx = mPosX - motionEvent.getRawX();
                                    dy = mPosY - motionEvent.getRawY();
                                    break;
                                case android.view.MotionEvent.ACTION_MOVE:
                                    mPosX = (motionEvent.getRawX() + dx);
                                    mPosY = (motionEvent.getRawY() + dy);
                                    GUI4.update(mPosX, mPosY - 15, -1, -1);
                                    break;
                                case android.view.MotionEvent.ACTION_UP:
                                case android.view.MotionEvent.ACTION_CANCEL:
                                    moving = false;
                                    break;
                            }
                        } catch (e) {}

                        return true;
                    }
                }));
                textvieww.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function(v, t) {
                        moving = true;
                        return true;
                    }
                }));
                layout.addView(textvieww, 165, 40);

                var textvieew = new android.widget.TextView(ctx);
                textvieew.setTextSize(15);
                textvieew.setText('Movement');
                textvieew.setGravity(android.view.Gravity.CENTER);
                textvieew.setBackground(bgoff);
                textvieew.setTextColor(android.graphics.Color.WHITE);
                textvieew.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!Gui2) {
                            mainMenu5();
                            textvieew.setBackground(bgon);
                            Gui2 = true;
                        } else {
                            menu3.dismiss();
                            textvieew.setBackground(bgoff);
                            Gui2 = false;
                        }
                    }
                }));
                textvieew.setOnTouchListener(new android.view.View.OnTouchListener({ // ability to move from dragop
                    onTouch: function(view, motionEvent) {
                        try {
                            if (!moving) return false;
                            switch (motionEvent.getAction()) {
                                case android.view.MotionEvent.ACTION_DOWN:
                                    dx = mPosX - motionEvent.getRawX();
                                    dy = mPosY - motionEvent.getRawY();
                                    break;
                                case android.view.MotionEvent.ACTION_MOVE:
                                    mPosX = (motionEvent.getRawX() + dx);
                                    mPosY = (motionEvent.getRawY() + dy);
                                    GUI4.update(mPosX, mPosY - 15, -1, -1);
                                    break;
                                case android.view.MotionEvent.ACTION_UP:
                                case android.view.MotionEvent.ACTION_CANCEL:
                                    moving = false;
                                    break;
                            }
                        } catch (e) {}

                        return true;
                    }
                }));
                textvieew.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function(v, t) {
                        moving = true;
                        return true;
                    }
                }));
                layout.addView(textvieew, 165, 40);

                var textviiew = new android.widget.TextView(ctx);
                textviiew.setTextSize(15);
                textviiew.setText('Player');
                textviiew.setGravity(android.view.Gravity.CENTER);
                textviiew.setBackground(bgoff);
                textviiew.setTextColor(android.graphics.Color.WHITE);
                textviiew.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!Gui3) {
                            mainMenu3();
                            textviiew.setBackground(bgon);
                            Gui3 = true;
                        } else {
                            menu1.dismiss();
                            textviiew.setBackground(bgoff);
                            Gui3 = false;
                        }
                    }
                }));
                textviiew.setOnTouchListener(new android.view.View.OnTouchListener({ // ability to move from dragop
                    onTouch: function(view, motionEvent) {
                        try {
                            if (!moving) return false;
                            switch (motionEvent.getAction()) {
                                case android.view.MotionEvent.ACTION_DOWN:
                                    dx = mPosX - motionEvent.getRawX();
                                    dy = mPosY - motionEvent.getRawY();
                                    break;
                                case android.view.MotionEvent.ACTION_MOVE:
                                    mPosX = (motionEvent.getRawX() + dx);
                                    mPosY = (motionEvent.getRawY() + dy);
                                    GUI4.update(mPosX, mPosY - 15, -1, -1);
                                    break;
                                case android.view.MotionEvent.ACTION_UP:
                                case android.view.MotionEvent.ACTION_CANCEL:
                                    moving = false;
                                    break;
                            }
                        } catch (e) {}

                        return true;
                    }
                }));
                textviiew.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function(v, t) {
                        moving = true;
                        return true;
                    }
                }));
                layout.addView(textviiew, 165, 40);
                //@SkidClient
                var texttview = new android.widget.TextView(ctx);
                texttview.setTextSize(15);
                texttview.setText('Render');
                texttview.setGravity(android.view.Gravity.CENTER);
                texttview.setBackground(bgoff);
                texttview.setTextColor(android.graphics.Color.WHITE);
                texttview.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!Gui5) { //@SkidClient
                            mainMenu8();
                            texttview.setBackground(bgon);
                            Gui5 = true;
                        } else {
                            menu6.dismiss();
                            texttview.setBackground(bgoff);
                            Gui5 = false;
                        }
                    }
                }));
                texttview.setOnTouchListener(new android.view.View.OnTouchListener({ // ability to move from dragop
                    onTouch: function(view, motionEvent) {
                        try {
                            if (!moving) return false;
                            switch (motionEvent.getAction()) {
                                case android.view.MotionEvent.ACTION_DOWN:
                                    dx = mPosX - motionEvent.getRawX();
                                    dy = mPosY - motionEvent.getRawY();
                                    break;
                                case android.view.MotionEvent.ACTION_MOVE:
                                    mPosX = (motionEvent.getRawX() + dx);
                                    mPosY = (motionEvent.getRawY() + dy);
                                    GUI4.update(mPosX, mPosY - 15, -1, -1);
                                    break;
                                case android.view.MotionEvent.ACTION_UP:
                                case android.view.MotionEvent.ACTION_CANCEL:
                                    moving = false;
                                    break;
                            }
                        } catch (e) {}

                        return true;
                    }
                }));
                texttview.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function(v, t) {
                        moving = true;
                        return true;
                    }
                }));
                layout.addView(texttview, 165, 40);

                var texxtview = new android.widget.TextView(ctx);
                texxtview.setTextSize(15);
                texxtview.setText('KeyBinds');
                texxtview.setGravity(android.view.Gravity.CENTER);
                texxtview.setTextColor(android.graphics.Color.WHITE);
                texxtview.setBackground(bgoff);
                texxtview.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!Gui6) { //@SkidClient
                            mainMenu7();
                            texxtview.setBackground(bgon);
                            Gui6 = true;
                        } else {
                            menu5.dismiss();
                            texxtview.setBackground(bgoff);
                            Gui6 = false;
                        }
                    }
                }));
                texxtview.setOnTouchListener(new android.view.View.OnTouchListener({ // ability to move from dragop
                    onTouch: function(view, motionEvent) {
                        try {
                            if (!moving) return false;
                            switch (motionEvent.getAction()) {
                                case android.view.MotionEvent.ACTION_DOWN:
                                    dx = mPosX - motionEvent.getRawX();
                                    dy = mPosY - motionEvent.getRawY();
                                    break;
                                case android.view.MotionEvent.ACTION_MOVE:
                                    mPosX = (motionEvent.getRawX() + dx);
                                    mPosY = (motionEvent.getRawY() + dy);
                                    GUI4.update(mPosX, mPosY - 15, -1, -1);
                                    break;
                                case android.view.MotionEvent.ACTION_UP:
                                case android.view.MotionEvent.ACTION_CANCEL:
                                    moving = false;
                                    break;
                            }
                        } catch (e) {}

                        return true;
                    }
                }));
                texxtview.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function(v, t) {
                        moving = true;
                        return true;
                    }
                }));
                layout.addView(texxtview, 165, 40); //@SkidClient

                var textvview = new android.widget.TextView(ctx);
                textvview.setTextSize(15);
                textvview.setText('World');
                textvview.setGravity(android.view.Gravity.CENTER);
                textvview.setBackground(bgoff);
                textvview.setTextColor(android.graphics.Color.WHITE);
                textvview.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!Gui4) { //@SkidClient
                            mainMenu6();
                            textvview.setBackground(bgon);
                            Gui4 = true;
                        } else {
                            menu4.dismiss();
                            textvview.setBackground(bgoff);
                            Gui4 = false;
                        }
                    }
                }));
                textvview.setOnTouchListener(new android.view.View.OnTouchListener({ // ability to move from dragop
                    onTouch: function(view, motionEvent) {
                        try {
                            if (!moving) return false;
                            switch (motionEvent.getAction()) {
                                case android.view.MotionEvent.ACTION_DOWN:
                                    dx = mPosX - motionEvent.getRawX();
                                    dy = mPosY - motionEvent.getRawY();
                                    break;
                                case android.view.MotionEvent.ACTION_MOVE:
                                    mPosX = (motionEvent.getRawX() + dx);
                                    mPosY = (motionEvent.getRawY() + dy);
                                    GUI4.update(mPosX, mPosY - 15, -1, -1);
                                    break;
                                case android.view.MotionEvent.ACTION_UP:
                                case android.view.MotionEvent.ACTION_CANCEL:
                                    moving = false;
                                    break;
                            }
                        } catch (e) {}

                        return true;
                    }
                }));
                textvview.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function(v, t) {
                        moving = true;
                        return true;
                    }
                }));
                layout.addView(textvview, 165, 40);

                GUI4 = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
                GUI4.setAnimationStyle(android.R.style.Animation_InputMethod);
                GUI4.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUI4.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 0);
            } catch (error) {
                Toast.makeText(ctx, "Template Error: " + error, 1).show();
            }
        }
    }));
}
showtextview();
//@SkidClient
function showMenuBtnR() {

    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var layout = new LinearLayout(ctx);
                layout.setOrientation(1);
                //@SkidClient
                var sbp2 = new android.widget.TextView(ctx);
                sbp2.setText('>AimBotRange<');
                sbp2.setTextColor(android.graphics.Color.WHITE);
                sbp2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));
                sbp2.getBackground().setAlpha(150);
                sbp2.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {} //@SkidClient
                }));
                layout.addView(sbp2);
                //@SkidClient
                var sbp3Progress = 0;
                var sbp3 = new android.widget.SeekBar(ctx);
                sbp3.getBackground().setAlpha(150);
                sbp3.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));
                sbp3.setMax(4);
                sbp3.setProgress(sbp3Progress);
                sbp3.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener() {
                    onStopTrackingTouch: function(view) {
                        sbp3Progress = sbp3.getProgress();
                        if (sbpProgress == 0) {
                            ab1 = false;
                            ab2 = false;
                            abb1 = false;
                            abb2 = false;
                            abbb1 = false;
                            abbb2 = false;
                            abbbb1 = false;
                            abbbb2 = false;
                            sbp2.setText('>AimBotRange<');
                        }
                        if (sbp3Progress == 1) {
                            ab1 = true;
                            ab2 = true;
                            sbp2.setText('>AimBotRange<8');
                        }
                        if (sbp3Progress == 2) {
                            abb1 = true;
                            abb2 = true;
                            sbp2.setText('>AimBotRange<9');
                        }
                        if (sbp3Progress == 3) {
                            abbb1 = true;
                            abbb2 = true;
                            sbp2.setText('>AimBotRange<10');
                        }
                        if (sbp3Progress == 4) {
                            abbbb1 = true;
                            abbbb2 = true;
                            sbp2.setText('>AimBotRange<12');
                        }
                    } //@SkidClient
                });
                layout.addView(sbp3);
                //@SkidClient
                var sbp1 = new android.widget.TextView(ctx);
                sbp1.setText('>HitBoxSize<');
                sbp1.setTextColor(android.graphics.Color.WHITE);
                sbp1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));
                sbp1.getBackground().setAlpha(150);
                sbp1.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {} //@SkidClient
                }));
                layout.addView(sbp1);
                //@SkidClient
                var sbpProgress = 0;
                var sbp = new android.widget.SeekBar(ctx);
                sbp.getBackground().setAlpha(150);
                sbp.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));
                sbp.setMax(4);
                sbp.setProgress(sbpProgress);
                sbp.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener() {
                    onStopTrackingTouch: function(view) {
                        sbpProgress = sbp.getProgress();
                        if (sbpProgress == 0) {
                            var ent = getNearestEntity(1000);
                            Entity.setCollisionSize(ent, 2, 1);
                            sbp1.setText('>HitBoxSize<');
                        }
                        if (sbpProgress == 1) {
                            var ent = getNearestEntity(1000);
                            Entity.setCollisionSize(ent, 5, 5);
                            sbp1.setText('>HitBoxSize<5');
                        }
                        if (sbpProgress == 2) {
                            var ent = getNearestEntity(1000);
                            Entity.setCollisionSize(ent, 8, 8);
                            sbp1.setText('>HitBoxSize<8');
                        }
                        if (sbpProgress == 3) {
                            var ent = getNearestEntity(1000);
                            Entity.setCollisionSize(ent, 10, 8);
                            sbp1.setText('>HitBoxSize<10');
                        }
                        if (sbpProgress == 4) {
                            var ent = getNearestEntity(1000);
                            Entity.setCollisionSize(ent, 12, 8);
                            sbp1.setText('>HitBoxSize<12');
                        }
                    } //@SkidClient
                });
                layout.addView(sbp);

                GUIR = new PopupWindow(layout, ctx.getWindowManager().getDefaultDisplay().getWidth() / 5, ctx.getWindowManager().getDefaultDisplay().getHeight() / 2);
                GUIR.setAnimationStyle(android.R.style.Animation_InputMethod);
                GUIR.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                GUIR.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.BOTTOM, 200, 0);
            } catch (error) {
                Toast.makeText(ctx, "Template Error: " + error, 1).show();
            }
        }
    }));
}
//@SkidClient
function mainMenu4() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var menuLayout = new LinearLayout(ctx);
                var menuScroll = new ScrollView(ctx);
                var menuLayout1 = new LinearLayout(ctx);
                menuLayout.setOrientation(1);
                menuLayout1.setOrientation(1);
                menuScroll.addView(menuLayout);
                menuLayout1.addView(menuScroll);
                //@SkidClient
                var button = new android.widget.TextView(ctx);
                button.setText('Combat');
                button.setTextColor(android.graphics.Color.WHITE);
                button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));
                button.getBackground().setAlpha(150);
                button.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {}
                }));
                button.setOnTouchListener(new android.view.View.OnTouchListener({ // ability to move from dragop
                    onTouch: function(view, motionEvent) {
                        try {
                            if (!moving) return false;
                            switch (motionEvent.getAction()) {
                                case android.view.MotionEvent.ACTION_DOWN:
                                    dx = mPosX - motionEvent.getRawX();
                                    dy = mPosY - motionEvent.getRawY();
                                    break;
                                case android.view.MotionEvent.ACTION_MOVE:
                                    mPosX = (motionEvent.getRawX() + dx);
                                    mPosY = (motionEvent.getRawY() + dy);
                                    menu2.update(mPosX, mPosY - 15, -1, -1);
                                    break;
                                case android.view.MotionEvent.ACTION_UP:
                                case android.view.MotionEvent.ACTION_CANCEL:
                                    moving = false;
                                    break;
                            }
                        } catch (e) {}

                        return true;
                    }
                }));
                button.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function(v, t) {
                        moving = true;
                        return true;
                    }
                }));
                menuLayout.addView(button);
                //@SkidClient
                var buttonn = new android.widget.TextView(ctx);
                buttonn.setText('Aimbot');
                buttonn.setTextColor(android.graphics.Color.WHITE);
                buttonn.setBackground(aimbot ? mainbt : mainbt2);
                buttonn.setTextSize(15);
                buttonn.getBackground().setAlpha(150);
                buttonn.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!aimed) {
                            aimbot = true;
                            aimed = true;
                            buttonn.setBackground(mainbt);
                        } else { //@SkidClient
                            aimbot = false;
                            aimed = false;
                            buttonn.setBackground(mainbt2);
                        }
                        //@SkidClient
                    }
                }));
                menuLayout.addView(buttonn);
                //@SkidClient
                var button1 = new android.widget.TextView(ctx);
                button1.setText('Settings');
                button1.setTextColor(android.graphics.Color.WHITE);
                button1.setBackground(Gui9 ? mainbt : mainbt2);
                button1.setTextSize(15);
                button1.getBackground().setAlpha(150);
                button1.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!Gui9) { //@SkidClient
                            showMenuBtnR();
                            button1.setBackground(mainbt);
                            Gui9 = true;
                        } else {
                            GUIR.dismiss();
                            button1.setBackground(mainbt2);
                            Gui9 = false;
                        }
                    }
                }));
                menuLayout.addView(button1);
                //@SkidClient
                var button2 = new android.widget.TextView(ctx);
                button2.setText('HitAim');
                button2.setTextColor(android.graphics.Color.WHITE);
                button2.setBackground(aas2 ? mainbt : mainbt2);
                button2.setTextSize(15);
                button2.getBackground().setAlpha(150);
                button2.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!aas2) {
                            aas1 = true;
                            aas2 = true;
                            button2.setBackground(mainbt);
                        } else {
                            aas1 = false;
                            aas2 = false;
                            button2.setBackground(mainbt2);
                        }
                        //@SkidClient
                    }
                }));
                menuLayout.addView(button2);
                //@SkidClient
                var button22 = new android.widget.TextView(ctx);
                button22.setText('NoUp');
                button22.setTextColor(android.graphics.Color.WHITE);
                button22.setBackground(pvp2 ? mainbt : mainbt2);
                button22.setTextSize(15);
                button22.getBackground().setAlpha(150);
                button22.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!pvp2) {
                            pvp1 = true;
                            pvp2 = true;
                            button22.setBackground(mainbt);
                        } else {
                            pvp1 = false;
                            pvp2 = false;
                            button22.setBackground(mainbt2);
                        }
                        //@SkidClient
                    }
                }));
                menuLayout.addView(button22);
                //@SkidClient
                var button5 = new android.widget.TextView(ctx);
                button5.setText('HitBox');
                button5.setTextColor(android.graphics.Color.WHITE);
                button5.setBackground(hitboxed ? mainbt : mainbt2);
                button5.setTextSize(15);
                button5.getBackground().setAlpha(150);
                button5.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!hitboxed) {
                            hitboxss = true;
                            hitboxed = true;
                            button5.setBackground(mainbt);
                        } else {
                            hitboxss = false;
                            hitboxed = false;
                            button5.setBackground(mainbt2);
                        }
                        //@SkidClient
                    }
                }));
                menuLayout.addView(button5);
                //@SkidClient
                var button6 = new android.widget.TextView(ctx);
                button6.setText('Tpaura');
                button6.setTextColor(android.graphics.Color.WHITE);
                button6.setBackground(vtped ? mainbt : mainbt2);
                button6.setTextSize(15);
                button6.getBackground().setAlpha(150);
                button6.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!vtped) {
                            vtped = true;
                            vport = true;
                            button6.setBackground(mainbt);
                        } else {
                            vtped = false;
                            vport = false;
                            button6.setBackground(mainbt2);
                        }

                    } //@SkidClient
                }));
                menuLayout.addView(button6);
                //@SkidClient
                var button8 = new android.widget.TextView(ctx);
                button8.setText('Criticales');
                button8.setTextColor(android.graphics.Color.WHITE);
                button8.setBackground(cs2 ? mainbt : mainbt2);
                button8.setTextSize(15);
                button8.getBackground().setAlpha(150);
                button8.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!cs2) {
                            cs1 = true;
                            cs2 = true;
                            button8.setBackground(mainbt);
                        } else {
                            cs1 = false;
                            cs2 = false;
                            button8.setBackground(mainbt2);
                        }

                    } //@SkidClient
                }));
                menuLayout.addView(button8);
                //@SkidClient
                var button11 = new android.widget.TextView(ctx);
                button11.setText('Hover Aura');
                button11.setTextColor(android.graphics.Color.WHITE);
                button11.setBackground(ir2 ? mainbt : mainbt2);
                button11.setTextSize(15);
                button11.getBackground().setAlpha(150);
                button11.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!ir2) {
                            ir1 = true;
                            ir2 = true;
                            button11.setBackground(mainbt);
                        } else {
                            ir1 = false;
                            ir2 = false;
                            button11.setBackground(mainbt2);
                        }
                        //@SkidClient
                    }
                }));
                menuLayout.addView(button11);
                //@SkidClient
                var button12 = new android.widget.TextView(ctx);
                button12.setText('Fov');
                button12.setTextColor(android.graphics.Color.WHITE);
                button12.setBackground(gmSwitchedddd ? mainbt : mainbt2);
                button12.setTextSize(15);
                button12.getBackground().setAlpha(150);
                button12.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!gmSwitchedddd) {
                            ModPE.setFov(98)
                            gmSwitchedddd = true;
                            button12.setBackground(mainbt);
                            print("Rrach on")
                        } else {
                            print("Reach off")
                            ModPE.resetFov()
                            gmSwitchedddd = false;
                            button12.setBackground(mainbt2);
                        } //@SkidClient

                    }
                }));
                menuLayout.addView(button12);
                //@SkidClient
                menu2 = new PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth() / 6, ctx.getWindowManager().getDefaultDisplay().getHeight() / 2);
                menu2.setAnimationStyle(android.R.style.Animation_InputMethod);
                menu2.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                menu2.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.BOTTOM, 0, 0);
            } catch (err) {
                Toast.makeText(ctx, "An error occured: " + err, 1).show();
            }
        }
    }));
} //@SkidClient

function mainMenu5() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var menuLayoutt = new LinearLayout(ctx);
                var menuScroll = new ScrollView(ctx);
                var menuLayout1 = new LinearLayout(ctx);
                menuLayoutt.setOrientation(1);
                menuLayout1.setOrientation(1);
                menuScroll.addView(menuLayoutt);
                menuLayout1.addView(menuScroll);
                //@SkidClient
                var button = new android.widget.TextView(ctx);
                button.setText('Motion');
                button.setTextColor(android.graphics.Color.WHITE);
                button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));
                button.getBackground().setAlpha(150);
                button.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {}
                }));
                button.setOnTouchListener(new android.view.View.OnTouchListener({ // ability to move from dragop
                    onTouch: function(view, motionEvent) {
                        try {
                            if (!moving) return false;
                            switch (motionEvent.getAction()) {
                                case android.view.MotionEvent.ACTION_DOWN:
                                    dx = mPosX - motionEvent.getRawX();
                                    dy = mPosY - motionEvent.getRawY();
                                    break;
                                case android.view.MotionEvent.ACTION_MOVE:
                                    mPosX = (motionEvent.getRawX() + dx);
                                    mPosY = (motionEvent.getRawY() + dy);
                                    menu3.update(mPosX, mPosY - 15, -1, -1);
                                    break;
                                case android.view.MotionEvent.ACTION_UP:
                                case android.view.MotionEvent.ACTION_CANCEL:
                                    moving = false;
                                    break;
                            }
                        } catch (e) {}

                        return true;
                    }
                }));
                button.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function(v, t) {
                        moving = true;
                        return true;
                    }
                }));
                menuLayoutt.addView(button);
                //@SkidClient
                var button54 = new TextView(ctx);
                button54.setText('Speed');
                button54.setTextColor(android.graphics.Color.WHITE);
                button54.setBackground(msped ? mainbt : mainbt2);
                button54.setTextSize(15);
                button54.getBackground().setAlpha(150);
                button54.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!msped) {
                            msped = true;
                            motion = true;
                            button54.setBackground(mainbt);
                        } else {
                            msped = false;
                            motion = false;
                            button54.setBackground(mainbt2);
                        }
                        //@SkidClient
                    }
                }));
                menuLayoutt.addView(button54);
                //@SkidClient
                var button546 = new TextView(ctx);
                button546.setText('JetPack');
                button546.setTextColor(android.graphics.Color.WHITE);
                button546.setBackground(csb2 ? mainbt : mainbt2);
                button546.setTextSize(15);
                button546.getBackground().setAlpha(150);
                button546.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!csb2) {
                            csb1 = true;
                            csb2 = true;
                            button546.setBackground(mainbt);
                        } else {
                            csb1 = false;
                            csb2 = false;
                            button546.setBackground(mainbt2);
                        }
                        //@SkidClient
                    }
                }));
                menuLayoutt.addView(button546);
                //@SkidClient
                var button57 = new TextView(ctx);
                button57.setText('B hop');
                button57.setTextColor(android.graphics.Color.WHITE);
                button57.setBackground(bhoped ? mainbt : mainbt2);
                button57.setTextSize(15);
                button57.getBackground().setAlpha(150);
                button57.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!bhoped) {
                            bhopl = true;
                            bhoped = true;
                            button57.setBackground(mainbt);
                        } else {
                            bhopl = false;
                            bhoped = false;
                            button57.setBackground(mainbt2);
                        }
                        //@SkidClient
                    }
                }));
                menuLayoutt.addView(button57);
                //@SkidClient
                var button13 = new android.widget.TextView(ctx);
                button13.setText('Tower');
                button13.setTextColor(android.graphics.Color.WHITE);
                button13.setBackground(taptowered ? mainbt : mainbt2);
                button13.setTextSize(15);
                button13.getBackground().setAlpha(150);
                button13.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!taptowered) {
                            taptowerss = true;
                            taptowered = true;
                            button13.setBackground(mainbt);
                        } else {
                            taptowerss = false;
                            taptowered = false;
                            button13.setBackground(mainbt2);
                        } //@SkidClient

                    }
                }));
                menuLayoutt.addView(button13);

                //@SkidClient
                var button15 = new android.widget.TextView(ctx);
                button15.setText('AirJump');
                button15.setTextColor(android.graphics.Color.WHITE);
                button15.setBackground(airjumped ? mainbt : mainbt2);
                button15.setTextSize(15);
                button15.getBackground().setAlpha(150);
                button15.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!airjumped) {
                            showJumpBtn();
                            airjumped = true;
                            button15.setBackground(mainbt);
                        } else {
                            GUIj.dismiss();
                            airjumped = false;
                            button15.setBackground(mainbt2);
                        }

                    }
                })); //@SkidClient
                menuLayoutt.addView(button15);
                //@SkidClient
                var button16 = new android.widget.TextView(ctx);
                button16.setText('AutoWalk');
                button16.setTextColor(android.graphics.Color.WHITE);
                button16.setBackground(aw2 ? mainbt : mainbt2);
                button16.setTextSize(15);
                button16.getBackground().setAlpha(150);
                button16.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!aw2) {
                            aw1 = true;
                            aw2 = true;
                            button16.setBackground(mainbt);
                        } else {
                            aw1 = false;
                            aw2 = false;
                            button16.setBackground(mainbt2);
                        }

                    } //@SkidClient
                }));
                menuLayoutt.addView(button16);
                //@SkidClient
                var button17 = new android.widget.TextView(ctx);
                button17.setText('Step');
                button17.setTextColor(android.graphics.Color.WHITE);
                button17.setBackground(steped ? mainbt : mainbt2);
                button17.setTextSize(15);
                button17.getBackground().setAlpha(150);
                button17.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!steped) {
                            stepss = true;
                            steped = true;
                            button17.setBackground(mainbt);
                        } else {
                            stepss = false;
                            steped = false;
                            button17.setBackground(mainbt2);
                        }

                    }
                }));
                menuLayoutt.addView(button17);
                //@SkidClient

                var button20 = new android.widget.TextView(ctx);
                button20.setText('JumpGlide');
                button20.setTextColor(android.graphics.Color.WHITE);
                button20.setBackground(ljc2 ? mainbt : mainbt2);
                button20.setTextSize(15);
                button20.getBackground().setAlpha(150);
                button20.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!ljc2) {
                            ljc1 = true;
                            ljc2 = true;
                            button20.setBackground(mainbt);
                        } else {
                            ljc1 = false;
                            ljc2 = false;
                            button20.setBackground(mainbt2);
                        }
                        //@SkidClient
                    }
                }));
                menuLayoutt.addView(button20);
                //@SkidClient
                var button24 = new android.widget.TextView(ctx);
                button24.setText('FastBridge');
                button24.setTextColor(android.graphics.Color.WHITE);
                button24.setBackground(fb2 ? mainbt : mainbt2);
                button24.setTextSize(15);
                button24.getBackground().setAlpha(150);
                button24.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!fb2) {
                            fb1 = true;
                            fb2 = true;
                            button24.setBackground(mainbt);
                        } else {
                            fb1 = false;
                            fb2 = false;
                            button24.setBackground(mainbt2);
                        }

                    } //@SkidClient
                }));
                menuLayoutt.addView(button24);

                var buttonn = new android.widget.TextView(ctx);
                buttonn.setText('CrouchGlide (Bypass lbsg,mineplex,etc)');
                buttonn.setTextColor(android.graphics.Color.WHITE);
                buttonn.setBackground(bgl2 ? mainbt : mainbt2);
                buttonn.setTextSize(15);
                buttonn.getBackground().setAlpha(150);
                buttonn.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!bgl2) {
                            bgl1 = true;
                            bgl2 = true;
                            buttonn.setBackground(mainbt);
                        } else {
                            bgl1 = false;
                            bgl2 = false;
                            buttonn.setBackground(mainbt2);
                        }
                        //@SkidClient
                    }
                }));
                menuLayoutt.addView(buttonn);
                //@SkidClient
                var button26 = new android.widget.TextView(ctx);
                button26.setText('Scaffold');
                button26.setTextColor(android.graphics.Color.WHITE);
                button26.setBackground(sc2 ? mainbt : mainbt2);
                button26.setTextSize(15);
                button26.getBackground().setAlpha(150);
                button26.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!sc2) {
                            sc1 = true;
                            sc2 = true;
                            button26.setBackground(mainbt);
                        } else {
                            sc1 = false;
                            sc2 = false;
                            button26.setBackground(mainbt2);
                        }
                        //@SkidClient
                    }
                }));
                menuLayoutt.addView(button26);
                //@SkidClient
                var button27 = new android.widget.TextView(ctx);
                button27.setText('SafeWalk');
                button27.setTextColor(android.graphics.Color.WHITE);
                button27.setBackground(sw2 ? mainbt : mainbt2);
                button27.setTextSize(15);
                button27.getBackground().setAlpha(150);
                button27.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!sw2) { //@SkidClient
                            sw1 = true;
                            sw2 = true;
                            button27.setBackground(mainbt);
                        } else {
                            sw1 = false;
                            sw2 = false;
                            button27.setBackground(mainbt2);
                        }

                    }
                }));
                menuLayoutt.addView(button27);
                //@SkidClient
                var button28 = new android.widget.TextView(ctx);
                button28.setText('NoDownGlide');
                button28.setTextColor(android.graphics.Color.WHITE);
                button28.setBackground(ndglideed ? mainbt : mainbt2);
                button28.setTextSize(15);
                button28.getBackground().setAlpha(150);
                button28.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!ndglideed) {
                            ndglidess = true;
                            ndglideed = true;
                            button28.setBackground(mainbt);
                        } else {
                            ndglidess = false;
                            ndglideed = false;
                            button28.setBackground(mainbt2);
                        }

                    }
                }));
                menuLayoutt.addView(button28);
                //@SkidClient

                var button29 = new android.widget.TextView(ctx);
                button29.setText('Elevator');
                button29.setTextColor(android.graphics.Color.WHITE);
                button29.setBackground(elevatored ? mainbt : mainbt2);
                button29.setTextSize(15);
                button29.getBackground().setAlpha(150);
                button29.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!elevatored) {
                            showElevatorBtn();
                            elevatored = true;
                            button29.setBackground(mainbt);
                        } else {
                            GUIe.dismiss();
                            elevatored = false;
                            button29.setBackground(mainbt2);
                        }
                        //@SkidClient
                    }
                }));
                menuLayoutt.addView(button29);
                //@SkidClient
                menu3 = new PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth() / 6, ctx.getWindowManager().getDefaultDisplay().getHeight() / 2);
                menu3.setAnimationStyle(android.R.style.Animation_InputMethod);
                menu3.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                menu3.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 250, 0);
            } catch (error) {
                Toast.makeText(ctx, "Template Error: " + error, 1).show();
            }
        }
    }));
}
//@SkidClient
function screenChangeHook(screen) {
    if (screen.toString().indexOf("progress_screen") > -1) {
        Utils.Render.init();
    }
}
var entry = getPlayerEnt()

function mainMenu3() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var menuLayouttt = new LinearLayout(ctx);
                var menuScroll = new ScrollView(ctx);
                var menuLayout1 = new LinearLayout(ctx);
                menuLayouttt.setOrientation(1);
                menuLayout1.setOrientation(1);
                menuScroll.addView(menuLayouttt);
                menuLayout1.addView(menuScroll);
                //@SkidClient
                var button = new android.widget.TextView(ctx);
                button.setText('Player');
                button.setTextColor(android.graphics.Color.WHITE);
                button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));
                button.getBackground().setAlpha(150);
                button.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {}
                }));
                button.setOnTouchListener(new android.view.View.OnTouchListener({ // ability to move from dragop
                    onTouch: function(view, motionEvent) {
                        try {
                            if (!moving) return false;
                            switch (motionEvent.getAction()) {
                                case android.view.MotionEvent.ACTION_DOWN:
                                    dx = mPosX - motionEvent.getRawX();
                                    dy = mPosY - motionEvent.getRawY();
                                    break;
                                case android.view.MotionEvent.ACTION_MOVE:
                                    mPosX = (motionEvent.getRawX() + dx);
                                    mPosY = (motionEvent.getRawY() + dy);
                                    menu1.update(mPosX, mPosY - 15, -1, -1);
                                    break;
                                case android.view.MotionEvent.ACTION_UP:
                                case android.view.MotionEvent.ACTION_CANCEL:
                                    moving = false;
                                    break;
                            }
                        } catch (e) {}

                        return true;
                    }
                }));
                button.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function(v, t) {
                        moving = true;
                        return true;
                    }
                }));
                menuLayouttt.addView(button);
                //@SkidClient
                var button31 = new android.widget.TextView(ctx);
                button31.setText('AntiKnockBack');
                button31.setTextColor(android.graphics.Color.WHITE);
                button31.setBackground(antikbed ? mainbt : mainbt2);
                button31.setTextSize(15);
                button31.getBackground().setAlpha(150);
                button31.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!antikbed) { //@SkidClient
                            antikbss = true;
                            antikbed = true;
                            button31.setBackground(mainbt);
                            print("AntiKnockBack on ")
                        } else {
                            print("AntiKnockBack Off ")
                            antikbss = false; //@SkidClient
                            antikbed = false;
                            button31.setBackground(mainbt2);
                        }
                        //@SkidClient
                    }
                }));
                menuLayouttt.addView(button31);
                //@SkidClient
                var buttonf = new android.widget.TextView(ctx);
                buttonf.setText('Follow');
                buttonf.setTextColor(android.graphics.Color.WHITE);
                buttonf.setBackground(hj2 ? mainbt : mainbt2);
                buttonf.setTextSize(15);
                buttonf.getBackground().setAlpha(150);
                buttonf.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!hj2) {
                            hj1 = true; //@SkidClient
                            hj2 = true;
                            buttonf.setBackground(mainbt);
                            print("Follow on ")
                        } else {
                            print("Follow Off ")
                            hj1 = false;
                            hj2 = false; //@SkidClient
                            buttonf.setBackground(mainbt2);
                        }

                    }
                }));
                menuLayouttt.addView(buttonf);
                //@SkidClient
                var button60 = new TextView(ctx);
                button60.setText('Jesus');
                button60.setTextColor(android.graphics.Color.WHITE);
                button60.setBackground(bj2 ? mainbt : mainbt2);
                button60.setTextSize(15);
                button60.getBackground().setAlpha(150);
                button60.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!bj2) {
                            bj1 = true;
                            bj2 = true;
                            button60.setBackground(mainbt);
                        } else {
                            bj1 = false;
                            bj2 = false;
                            button60.setBackground(mainbt2);
                        }

                    }
                }));
                menuLayouttt.addView(button60);
                //@SkidClient
                var button62 = new TextView(ctx);
                button62.setText('Dolphin');
                button62.setTextColor(android.graphics.Color.WHITE);
                button62.setBackground(jsed ? mainbt : mainbt2);
                button62.setTextSize(15);
                button62.getBackground().setAlpha(150);
                button62.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!jsed) {
                            jsed = true;
                            jesus = true;
                            button62.setBackground(mainbt);
                        } else {
                            jsed = false;
                            jesus = false;
                            button62.setBackground(mainbt2);
                        }
                        //@SkidClient
                    }
                }));
                menuLayouttt.addView(button62);
                //@SkidClient
                var button32 = new android.widget.TextView(ctx);
                button32.setText('TapTP');
                button32.setTextColor(android.graphics.Color.WHITE);
                button32.setBackground(taptped ? mainbt : mainbt2);
                button32.setTextSize(15);
                button32.getBackground().setAlpha(150);
                button32.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!taptped) {
                            taptpss = true;
                            taptped = true;
                            button32.setBackground(mainbt);
                        } else {
                            taptpss = false;
                            taptped = false;
                            button32.setBackground(mainbt2);
                        } //@SkidClient

                    }
                }));
                menuLayouttt.addView(button32);
                //@SkidClient
                var buttontb = new android.widget.TextView(ctx);
                buttontb.setText('TapBoost');
                buttontb.setTextColor(android.graphics.Color.WHITE);
                buttontb.setBackground(tb2 ? mainbt : mainbt2);
                buttontb.setTextSize(15);
                buttontb.getBackground().setAlpha(150);
                buttontb.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!tb2) {
                            tb1 = true;
                            tb2 = true;
                            buttontb.setBackground(mainbt);
                        } else {
                            tb1 = false;
                            tb2 = false;
                            buttontb.setBackground(mainbt2);
                        }

                    }
                }));
                menuLayouttt.addView(buttontb);
                //@SkidClient
                var button770 = new android.widget.TextView(ctx);
                button770.setText('FastLadder');
                button770.setTextColor(android.graphics.Color.WHITE);
                button770.setBackground(fl2 ? mainbt : mainbt2);
                button770.setTextSize(15);
                button770.getBackground().setAlpha(150);
                button770.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!fl2) {
                            fl1 = true;
                            fl2 = true;
                            button770.setBackground(mainbt);
                        } else {
                            fl1 = false;
                            fl2 = false;
                            button770.setBackground(mainbt2);
                        }
                        //@SkidClient
                    }
                }));
                menuLayouttt.addView(button770);
                //@SkidClient
                var button644 = new android.widget.TextView(ctx);
                button644.setText('NoBob');
                button644.setTextColor(android.graphics.Color.WHITE);
                button644.setBackground(nbb2 ? mainbt : mainbt2);
                button644.setTextSize(15);
                button644.getBackground().setAlpha(150);
                button644.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!nbb2) {
                            nbb1 = true;
                            nbb2 = true;
                            button644.setBackground(mainbt);
                        } else {
                            nbb1 = false;
                            nbb2 = false;
                            button644.setBackground(mainbt2);
                        }
                        //@SkidClient
                    }
                }));
                menuLayouttt.addView(button644);
                //@SkidClient
                var button40 = new android.widget.TextView(ctx);
                button40.setText('YourHeath');
                button40.setTextColor(android.graphics.Color.WHITE);
                button40.setBackground(spammed ? mainbt : mainbt2);
                button40.setTextSize(15);
                button40.getBackground().setAlpha(150);
                button40.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!spammed) {
                            spamss = true;
                            spammed = true;
                            button40.setBackground(mainbt);
                        } else {
                            spamss = false;
                            spammed = false;
                            button40.setBackground(mainbt2);
                        }
                        //@SkidClient
                    }
                }));
                menuLayouttt.addView(button40);
                //@SkidClient
                var button41 = new android.widget.TextView(ctx);
                button41.setText('Coordinates');
                button41.setTextColor(android.graphics.Color.WHITE);
                button41.setBackground(livecored ? mainbt : mainbt2);
                button41.setTextSize(15);
                button41.getBackground().setAlpha(150);
                button41.getBackground().setAlpha(150);
                button41.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!livecored) {
                            livecordss = true;
                            livecored = true;
                            button41.setBackground(mainbt);
                        } else {
                            livecordss = false;
                            livecored = false;
                            button41.setBackground(mainbt2);
                        }
                        //@SkidClient
                    }
                }));
                menuLayouttt.addView(button41);
                //@SkidClient
                menu1 = new PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth() / 6, ctx.getWindowManager().getDefaultDisplay().getHeight() / 2);
                menu1.setAnimationStyle(android.R.style.Animation_InputMethod);
                menu1.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                menu1.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 500, 0);
            } catch (error) {
                Toast.makeText(ctx, "Template Error: " + error, 1).show();
            }
        }
    }));
} //@SkidClient
//@SkidClient
function mainMenu6() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var menuLayoutttt = new LinearLayout(ctx);
                var menuScroll = new ScrollView(ctx);
                var menuLayout1 = new LinearLayout(ctx);
                menuLayoutttt.setOrientation(1);
                menuLayout1.setOrientation(1);
                menuScroll.addView(menuLayoutttt);
                menuLayout1.addView(menuScroll);
                //@SkidClient
                var button = new android.widget.TextView(ctx);
                button.setText('World');
                button.setTextColor(android.graphics.Color.WHITE);
                button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));
                button.getBackground().setAlpha(150);
                button.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {}
                }));
                button.setOnTouchListener(new android.view.View.OnTouchListener({ // ability to move from dragop
                    onTouch: function(view, motionEvent) {
                        try {
                            if (!moving) return false;
                            switch (motionEvent.getAction()) {
                                case android.view.MotionEvent.ACTION_DOWN:
                                    dx = mPosX - motionEvent.getRawX();
                                    dy = mPosY - motionEvent.getRawY();
                                    break;
                                case android.view.MotionEvent.ACTION_MOVE:
                                    mPosX = (motionEvent.getRawX() + dx);
                                    mPosY = (motionEvent.getRawY() + dy);
                                    menu4.update(mPosX, mPosY - 15, -1, -1);
                                    break;
                                case android.view.MotionEvent.ACTION_UP:
                                case android.view.MotionEvent.ACTION_CANCEL:
                                    moving = false;
                                    break;
                            }
                        } catch (e) {}

                        return true;
                    }
                }));
                button.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function(v, t) {
                        moving = true;
                        return true;
                    }
                }));
                menuLayoutttt.addView(button);
                //@SkidClient
                var button42 = new android.widget.TextView(ctx);
                button42.setText('SurvivalFly');
                button42.setTextColor(android.graphics.Color.WHITE);
                button42.setBackground(gmSwitched ? mainbt : mainbt2);
                button42.setTextSize(15);
                button42.getBackground().setAlpha(150);
                button42.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!gmSwitched) {
                            Player.setCanFly(1)
                            Player.isFlying(1)
                            gmSwitched = true;
                            button42.setBackground(mainbt);
                        } else {
                            Player.setCanFly(0)
                            gmSwitched = false;
                            button42.setBackground(mainbt2);
                        }

                    }
                }));
                menuLayoutttt.addView(button42);
                //@SkidClient
                var button43 = new android.widget.TextView(ctx);
                button43.setText('ClearInv');
                button43.setTextColor(android.graphics.Color.WHITE);
                button43.setBackground(gmSwitched3 ? mainbt : mainbt2);
                button43.setTextSize(15);
                button43.getBackground().setAlpha(150);
                button43.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!gmSwitched3) {
                            Player.clearInventorySlot(1);
                            Player.clearInventorySlot(2);
                            Player.clearInventorySlot(3);
                            Player.clearInventorySlot(4);
                            Player.clearInventorySlot(5);
                            Player.clearInventorySlot(6);
                            Player.clearInventorySlot(7);
                            Player.clearInventorySlot(8);
                            Player.clearInventorySlot(9);
                            Player.clearInventorySlot(10);
                            Player.clearInventorySlot(11);
                            Player.clearInventorySlot(12);
                            Player.clearInventorySlot(13);
                            Player.clearInventorySlot(14);
                            Player.clearInventorySlot(15);
                            Player.clearInventorySlot(16);
                            Player.clearInventorySlot(17);
                            Player.clearInventorySlot(18);
                            Player.clearInventorySlot(19);
                            Player.clearInventorySlot(20);
                            Player.clearInventorySlot(21);
                            Player.clearInventorySlot(22);
                            Player.clearInventorySlot(23);
                            Player.clearInventorySlot(24);
                            Player.clearInventorySlot(25);
                            Player.clearInventorySlot(26);
                            Player.clearInventorySlot(27);
                            Player.clearInventorySlot(28);
                            Player.clearInventorySlot(29);
                            Player.clearInventorySlot(30);
                            Player.clearInventorySlot(31);
                            Player.clearInventorySlot(32);
                            Player.clearInventorySlot(33);
                            Player.clearInventorySlot(34);
                            Player.clearInventorySlot(35);
                            Player.clearInventorySlot(36);
                            Player.clearInventorySlot(37);
                            Player.clearInventorySlot(38);
                            Player.clearInventorySlot(39);
                            Player.clearInventorySlot(40);
                            Player.clearInventorySlot(41);
                            Player.clearInventorySlot(42);
                            Player.clearInventorySlot(43);
                            Player.clearInventorySlot(44);
                            gmSwitched3 = true;
                            button43.setBackground(mainbt);
                        } else {
                            Player.clearInventorySlot(1);
                            Player.clearInventorySlot(2);
                            Player.clearInventorySlot(3);
                            Player.clearInventorySlot(4);
                            Player.clearInventorySlot(5);
                            Player.clearInventorySlot(6);
                            Player.clearInventorySlot(7);
                            Player.clearInventorySlot(8);
                            Player.clearInventorySlot(9);
                            Player.clearInventorySlot(10);
                            Player.clearInventorySlot(11);
                            Player.clearInventorySlot(12);
                            Player.clearInventorySlot(13);
                            Player.clearInventorySlot(14);
                            Player.clearInventorySlot(15);
                            Player.clearInventorySlot(16);
                            Player.clearInventorySlot(17);
                            Player.clearInventorySlot(18);
                            Player.clearInventorySlot(19);
                            Player.clearInventorySlot(20);
                            Player.clearInventorySlot(21);
                            Player.clearInventorySlot(22);
                            Player.clearInventorySlot(23);
                            Player.clearInventorySlot(24);
                            Player.clearInventorySlot(25);
                            Player.clearInventorySlot(26);
                            Player.clearInventorySlot(27);
                            Player.clearInventorySlot(28);
                            Player.clearInventorySlot(29);
                            Player.clearInventorySlot(30);
                            Player.clearInventorySlot(31);
                            Player.clearInventorySlot(32);
                            Player.clearInventorySlot(33);
                            Player.clearInventorySlot(34);
                            Player.clearInventorySlot(35);
                            Player.clearInventorySlot(36);
                            Player.clearInventorySlot(37);
                            Player.clearInventorySlot(38);
                            Player.clearInventorySlot(39);
                            Player.clearInventorySlot(40);
                            Player.clearInventorySlot(41);
                            Player.clearInventorySlot(42);
                            Player.clearInventorySlot(43);
                            Player.clearInventorySlot(44);
                            gmSwitched3 = false;
                            button43.setBackground(mainbt2);
                        }

                    }
                }));
                menuLayoutttt.addView(button43);
                //@SkidClient
                var button45 = new android.widget.TextView(ctx);
                button45.setText('CrossHair');
                button45.setTextColor(android.graphics.Color.WHITE);
                button45.setBackground(Gui7 ? mainbt : mainbt2);
                button45.setTextSize(15);
                button45.getBackground().setAlpha(150);
                button45.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!Gui7) {
                            showCrossBtn();
                            Gui7 = true;
                            button45.setBackground(mainbt);
                        } else {
                            GUIv.dismiss();
                            Gui7 = false;
                            button45.setBackground(mainbt2);
                        }

                    }
                }));
                menuLayoutttt.addView(button45);
                //@SkidClient
                var button47 = new android.widget.TextView(ctx);
                button47.setText('BedBreaker');
                button47.setTextColor(android.graphics.Color.WHITE);
                button47.setBackground(bb2 ? mainbt : mainbt2);
                button47.setTextSize(15);
                button47.getBackground().setAlpha(150);
                button47.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!bb2) {
                            bb1 = true;
                            bb2 = true;
                            button47.setBackground(mainbt);
                        } else {
                            bb1 = false;
                            bb2 = false;
                            button47.setBackground(mainbt2);
                        }

                    }
                }));
                menuLayoutttt.addView(button47);
                //@SkidClient
                var buttonvv = new android.widget.TextView(ctx);
                buttonvv.setText('FastIce');
                buttonvv.setTextColor(android.graphics.Color.WHITE);
                buttonvv.setBackground(fi2 ? mainbt : mainbt2);
                buttonvv.setTextSize(15);
                buttonvv.getBackground().setAlpha(150);
                buttonvv.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!fi2) {
                            fi1 = true;
                            fi2 = true;
                            buttonvv.setBackground(mainbt);
                        } else {
                            fi1 = false;
                            fi2 = false;
                            buttonvv.setBackground(mainbt2);
                        }

                    }
                }));
                menuLayoutttt.addView(buttonvv);
                //@SkidClient
                var button53 = new android.widget.TextView(ctx);
                button53.setText('AntiGravity');
                button53.setTextColor(android.graphics.Color.WHITE);
                button53.setBackground(tnt2 ? mainbt : mainbt2);
                button53.setTextSize(15);
                button53.getBackground().setAlpha(150);
                button53.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!tnt2) {
                            tnt1 = true;
                            tnt2 = true;
                            button53.setBackground(mainbt);
                        } else {
                            tnt1 = false;
                            tnt2 = false;
                            button53.setBackground(mainbt2);
                        }

                    }
                }));
                menuLayoutttt.addView(button53);
                //@SkidClient
                menu4 = new PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth() / 6, ctx.getWindowManager().getDefaultDisplay().getHeight() / 2);
                menu4.setAnimationStyle(android.R.style.Animation_InputMethod);
                menu4.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                menu4.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 750, 0);
            } catch (error) {
                Toast.makeText(ctx, "Template Error: " + error, 1).show();
            }
        }
    }));
}
//@SkidClient
function mainMenu8() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            try {
                var menuLayout = new android.widget.LinearLayout(ctx);
                var menuScroll = new android.widget.ScrollView(ctx);
                var menuLayout1 = new android.widget.LinearLayout(ctx);
                menuLayout.setOrientation(1);
                menuLayout1.setOrientation(1);
                menuScroll.addView(menuLayout);
                menuLayout1.addView(menuScroll);
                //@SkidClient
                var button = new android.widget.TextView(ctx);
                button.setText('Render');
                button.setTextColor(android.graphics.Color.WHITE);
                button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));
                button.getBackground().setAlpha(150);
                button.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {}
                }));
                button.setOnTouchListener(new android.view.View.OnTouchListener({ // ability to move from dragop
                    onTouch: function(view, motionEvent) {
                        try {
                            if (!moving) return false;
                            switch (motionEvent.getAction()) {
                                case android.view.MotionEvent.ACTION_DOWN:
                                    dx = mPosX - motionEvent.getRawX();
                                    dy = mPosY - motionEvent.getRawY();
                                    break;
                                case android.view.MotionEvent.ACTION_MOVE:
                                    mPosX = (motionEvent.getRawX() + dx);
                                    mPosY = (motionEvent.getRawY() + dy);
                                    menu6.update(mPosX, mPosY - 15, -1, -1);
                                    break;
                                case android.view.MotionEvent.ACTION_UP:
                                case android.view.MotionEvent.ACTION_CANCEL:
                                    moving = false;
                                    break;
                            }
                        } catch (e) {}

                        return true;
                    }
                }));
                button.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function(v, t) {
                        moving = true;
                        return true;
                    }
                }));
                menuLayout.addView(button);
                //@SkidClient
                var menuBtn = new TextView(ctx);
                menuBtn.setTextColor(android.graphics.Color.WHITE);
                menuBtn.setBackground(esp ? mainbt : mainbt2);
                menuBtn.getBackground().setAlpha(150);
                menuBtn.setText('Esp');
                menuBtn.setTextSize(15);
                menuBtn.setOnClickListener(new View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!esp) {
                            esp = true;
                            menuBtn.setBackground(mainbt);
                        } else {
                            esp = false;
                            menuBtn.setBackground(mainbt2);
                        }

                    }
                }));
                menuLayout.addView(menuBtn);
                //@SkidClient
                var button35 = new android.widget.TextView(ctx);
                button35.setText('GhostTouch');
                button35.setTextColor(android.graphics.Color.WHITE);
                button35.setBackground(ch2 ? mainbt : mainbt2);
                button35.setTextSize(15);
                button35.getBackground().setAlpha(150);
                button35.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!ch2) {
                            ch1 = true;
                            ch2 = true;
                            button35.setBackground(mainbt);
                            print("Ghost on")
                        } else {
                            print("Ghost off")
                            ch1 = false;
                            ch2 = false;
                            button35.setBackground(mainbt2);
                        }

                    }
                }));
                menuLayout.addView(button35);
                //@SkidClient
                var button36 = new android.widget.TextView(ctx);
                button36.setText('NameTag');
                button36.setTextColor(android.graphics.Color.WHITE);
                button36.setBackground(nt2 ? mainbt : mainbt2);
                button36.setTextSize(15);
                button36.getBackground().setAlpha(150);
                button36.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!nt2) {
                            nt1 = true;
                            nt2 = true;
                            button36.setBackground(mainbt);
                        } else {
                            nt1 = false;
                            nt2 = false;
                            button36.setBackground(mainbt2);
                        }

                    }
                }));
                menuLayout.addView(button36);
                //@SkidClient
                var button37 = new android.widget.TextView(ctx);
                button37.setText('OverStep');
                button37.setTextColor(android.graphics.Color.WHITE);
                button37.setBackground(gmSwitchedd8 ? mainbt : mainbt2);
                button37.setTextSize(15);
                button37.getBackground().setAlpha(150);
                button37.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!gmSwitchedd8) {
                            Entity.setCollisionSize(getPlayerEnt(), 0.1, 0.1);
                            gmSwitchedd8 = true;
                            button37.setBackground(mainbt);
                            print("OverStep on")
                        } else {
                            print("OverStep off")
                            Entity.setCollisionSize(getPlayerEnt(), 1, 2);
                            gmSwitchedd8 = false;
                            button37.setBackground(mainbt2);
                        }

                    }
                }));
                menuLayout.addView(button37);
                //@SkidClient
                var button38 = new android.widget.TextView(ctx);
                button38.setText('FullBright');
                button38.setTextColor(android.graphics.Color.WHITE);
                button38.setBackground(gmSwitchedddddd ? mainbt : mainbt2);
                button38.setTextSize(15);
                button38.getBackground().setAlpha(150);
                button38.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!gmSwitchedddddd) {
                            Entity.addEffect(Player.getEntity(), MobEffect.nightVision, 999999, 100, false, false);
                            gmSwitchedddddd = true;
                            button38.setBackground(mainbt);
                            print("FullBright on")
                        } else {
                            print("FullBright off")
                            Entity.removeAllEffects(getPlayerEnt());
                            gmSwitchedddddd = false;
                            button38.setBackground(mainbt2);
                        }

                    }
                }));
                menuLayout.addView(button38);
                //@SkidClient
                var button39 = new android.widget.TextView(ctx);
                button39.setText('Zoom');
                button39.setTextColor(android.graphics.Color.WHITE);
                button39.setBackground(gmSwitchedd ? mainbt : mainbt2);
                button39.setTextSize(15);
                button39.getBackground().setAlpha(150);
                button39.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!gmSwitchedd) {
                            ModPE.setFov(10.0)
                            gmSwitchedd = true;
                            button39.setBackground(mainbt);
                            print("Zoom on")
                        } else {
                            print("Zoom off")
                            ModPE.resetFov()
                            gmSwitchedd = false;
                            button39.setBackground(mainbt2);
                        }

                    }
                }));
                menuLayout.addView(button39);
                //@SkidClient
                menu6 = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth() / 6, ctx.getWindowManager().getDefaultDisplay().getHeight() / 2);
                menu6.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                menu6.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.BOTTOM, 500, 0);
            } catch (error) {
                print("An error occured: " + error);
            }
        }
    }));
}
//@SkidClient
function mainMenu7() {
    ctx.runOnUiThread(new Runnable({
        run: function() {
            try {
                var menuLayouttttt = new LinearLayout(ctx);
                var menuScroll = new ScrollView(ctx);
                var menuLayout1 = new LinearLayout(ctx);
                menuLayouttttt.setOrientation(1);
                menuLayout1.setOrientation(1);
                menuScroll.addView(menuLayouttttt);
                menuLayout1.addView(menuScroll);
                //@SkidClient
                var button = new android.widget.TextView(ctx);
                button.setText('KeyBinds');
                button.setTextColor(android.graphics.Color.WHITE);
                button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));
                button.getBackground().setAlpha(150);
                button.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {}
                }));
                button.setOnTouchListener(new android.view.View.OnTouchListener({ // ability to move from dragop
                    onTouch: function(view, motionEvent) {
                        try {
                            if (!moving) return false;
                            switch (motionEvent.getAction()) {
                                case android.view.MotionEvent.ACTION_DOWN:
                                    dx = mPosX - motionEvent.getRawX();
                                    dy = mPosY - motionEvent.getRawY();
                                    break;
                                case android.view.MotionEvent.ACTION_MOVE:
                                    mPosX = (motionEvent.getRawX() + dx);
                                    mPosY = (motionEvent.getRawY() + dy);
                                    menu5.update(mPosX, mPosY - 15, -1, -1);
                                    break;
                                case android.view.MotionEvent.ACTION_UP:
                                case android.view.MotionEvent.ACTION_CANCEL:
                                    moving = false;
                                    break;
                            }
                        } catch (e) {}

                        return true;
                    }
                }));
                button.setOnLongClickListener(new android.view.View.OnLongClickListener({
                    onLongClick: function(v, t) {
                        moving = true;
                        return true;
                    }
                }));
                menuLayouttttt.addView(button);
                //@SkidClient
                var button65 = new TextView(ctx);
                button65.setText('AimAura Bind');
                button65.setTextColor(android.graphics.Color.WHITE);
                button65.setBackground(airjumpedd ? mainbt : mainbt2);
                button65.setTextSize(15);
                button65.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!airjumpedd) {
                            showMenuBtn7();
                            airjumpedd = true;
                            button65.setBackground(mainbt);
                        } else {
                            GUI7.dismiss();
                            airjumpedd = false;
                            button65.setBackground(mainbt2);
                        }

                    }
                }));
                menuLayouttttt.addView(button65, 165, 60);
                //@SkidClient
                var button66 = new TextView(ctx);
                button66.setText('TpAura Bind');
                button66.setTextColor(android.graphics.Color.WHITE);
                button66.setBackground(airjumpeddd ? mainbt : mainbt2);
                button66.setTextSize(15);
                button66.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!airjumpeddd) {
                            showMenuBtn8();
                            airjumpeddd = true;
                            button66.setBackground(mainbt);
                        } else {
                            GUI8.dismiss();
                            airjumpeddd = false;
                            button66.setBackground(mainbt2);
                        }

                    }
                }));
                menuLayouttttt.addView(button66, 165, 60);
                //@SkidClient
                var button67 = new TextView(ctx);
                button67.setText('Boost Bind');
                button67.setTextColor(android.graphics.Color.WHITE);
                button67.setBackground(airjumpedddd ? mainbt : mainbt2);
                button67.setTextSize(15);
                button67.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!airjumpedddd) {
                            showMenuBtn3();
                            airjumpedddd = true;
                            button67.setBackground(mainbt);
                        } else {
                            GUI3.dismiss();
                            airjumpedddd = false;
                            button67.setBackground(mainbt2);
                        }

                    }
                }));
                menuLayouttttt.addView(button67, 165, 60);
                //@SkidClient
                var button68 = new TextView(ctx);
                button68.setText('Zoom Bind');
                button68.setTextColor(android.graphics.Color.WHITE);
                button68.setBackground(airjumpeddddd ? mainbt : mainbt2);
                button68.setTextSize(15);
                button68.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!airjumpeddddd) {
                            showMenuBtn44();
                            airjumpeddddd = true;
                            button68.setBackground(mainbt);
                        } else {
                            GUI44.dismiss();
                            airjumpeddddd = false;
                            button68.setBackground(mainbt2);
                        }

                    }
                }));
                menuLayouttttt.addView(button68, 165, 60);

                //@SkidClient

                var button71 = new TextView(ctx);
                button71.setText('HitBox Bind');
                button71.setTextColor(android.graphics.Color.WHITE);
                button71.setBackground(airjumpedddddddd ? mainbt : mainbt2);
                button71.setTextSize(15);
                button71.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!airjumpedddddddd) {
                            showMenuBtn10();
                            airjumpedddddddd = true;
                            button71.setBackground(mainbt);
                        } else {
                            GUI10.dismiss();
                            airjumpedddddddd = false;
                            button71.setBackground(mainbt2);
                        }

                    }
                }));
                menuLayouttttt.addView(button71, 165, 60);
                //@SkidClient
                var button72 = new TextView(ctx);
                button72.setText('FOV Bind');
                button72.setTextColor(android.graphics.Color.WHITE);
                button72.setBackground(airjumpeddddddddd ? mainbt : mainbt2);
                button72.setTextSize(15);
                button72.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!airjumpeddddddddd) {
                            showMenuBtn11();
                            airjumpeddddddddd = true;
                            button72.setBackground(mainbt);
                        } else {
                            GUI11.dismiss();
                            airjumpeddddddddd = false;
                            button72.setBackground(mainbt2);
                        }

                    }
                }));
                menuLayouttttt.addView(button72, 165, 60);
                //@SkidClient
                var button73 = new TextView(ctx);
                button73.setText('TapTp Bind');
                button73.setTextColor(android.graphics.Color.WHITE);
                button73.setBackground(airjumpedddddddddd ? mainbt : mainbt2);
                button73.setTextSize(15);
                button73.setOnClickListener(new android.view.View.OnClickListener({
                    onClick: function(viewarg) {
                        if (!airjumpedddddddddd) {
                            showTeleportBtn();
                            airjumpedddddddddd = true;
                            button73.setBackground(mainbt);
                        } else {
                            GUIt.dismiss();
                            airjumpedddddddddd = false;
                            button73.setBackground(mainbt2);
                        }

                    }
                }));
                menuLayouttttt.addView(button73, 165, 60);

                //@SkidClient

                menu5 = new PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth() / 6, ctx.getWindowManager().getDefaultDisplay().getHeight() / 2);
                menu5.setAnimationStyle(android.R.style.Animation_InputMethod);
                menu5.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                menu5.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.BOTTOM, 0, 0);
            } catch (error) {
                Toast.makeText(ctx, "Template Error: " + error, 1).show();
            }
        }
    }));
}
