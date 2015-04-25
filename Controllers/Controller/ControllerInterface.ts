


export class MainInterface {


    ClassName: string;
    ActionName: string;


    public View(req, res, model: any = null) {
        this.ClassName = this["__proto__"].constructor.name.replace("Controller", "");
        var tab = Object.getOwnPropertyNames(this["__proto__"]);
        var index;
        for (index = tab.length - 1; index >= 0; --index) {
            if (Object.getPrototypeOf(this)[tab[index]].arguments != null) {
                this.ActionName = tab[index];
            }
        }
        res.render('' + this.ClassName + '/' + this.ActionName.replace("Action", "") + '.ejs', { Param: req.params.Params, Model: model },
            function (err, html) {
                var data = {
                    title: 'Ma vue',
                    body: html
                };
                res.render('Shared/layout.ejs', data);
            });
    }


}