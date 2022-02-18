#                                 #
# c shell code by Kaloyan KRASTEV #
# # #  kaloyansen@gmail.com   # # #
# # # #                     # # # #
# # # # #                 # # # # #
# # # # # #             # # # # # #
# # # # # # #         # # # # # # #
# # # # # # # #     # # # # # # # #

if ( $USER == morla ) then
    set src = "~/Myxa/ap"
    set dstn = "~/public_html/ap"
    mkdir -v $dstn
    cp -frv $src/*.php $dstn/.

    set src = "~/Myxa/mode/js/play"
    set dstn = "~/public_html/play"
    mkdir -v $dstn
    cp -frv $src/* $dstn/.

    set src = "~/Myxa/ap/autoecole"
    set dstn = "~/public_html/moto"
    mkdir -v $dstn
    cp -frv $src/* $dstn/.

    set src = "~/Myxa/ap/code"
    set dstn = "~/public_html/ap/code"
    mkdir -v $dstn
    cp -frv $src/* $dstn/.

    set src = "~/Myxa/ap/jsex"
    set dstn = "~/public_html/ap/jsex"
    mkdir -v $dstn
    cp -frv $src/* $dstn/.

    set src = "~/Myxa/ap/login"
    set dstn = "~/public_html/ap/login"
    mkdir -v $dstn
    cp -frv $src/* $dstn/.

    echo code uploaded
    echo have a lot of happiness
else
    echo no need to do upload at home - create a symbolic link instead
endif
