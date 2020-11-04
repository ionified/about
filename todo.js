;
~
{ re:
    { id: 'todos@ionified.net'
    , is: 'todo'
    , by: 'mike.lee@iskitz'
    , on: -8.20161115
    , to: -8.20201104
    , at: +0.02
    , it: "lists ionified's things to do"
    },

  todo:
    { '-8.20180107':
        { "ions.ionified.net":
            [ "create subdomain"
            , `redirect ion paths:
                  ions.ionified.net/ion.name      => github.com/ionified/ion.name-ions.ionified.net
                  ions.ionified.net/ion@domain|ip => github.com/ionified/ion.name-domain|ip
              `
            ]
        }
    }
}
;