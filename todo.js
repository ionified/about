;
~
{ re:
    { id: "todos@ionified.net"
    , by: "mike.lee@iskitz"
    , at: "2018.01.07-08...2016.11.15-08"
    , is: "ionified's list of things to do"
    }
    
, todo
:   { "2018.01.07-08"
    :   { "ions.ionified.net"
        :   [ "create subdomain"
            , `redirect ion paths:
                  ions.ionified.net/ion.name      => github.com/ionified/ion.name-ions.ionified.net
                  ions.ionified.net/ion@domain|ip => github.com/ionified/ion.name-domain|ip
              `
            ]
        }
    }
}
;