'use strict';
define(
    [
        'underscore',
        'pim/form',
        'pim/template/product/export-csv',
        'routing'
    ],
    function (
        _,
        BaseForm,
        template,
        Routing
    ) {
        return BaseForm.extend({
            className: 'btn-group',
            template: _.template(template),
            render: function () {
                this.$el.html(
                    this.template({
                        path: 'http://www.web200.fr'
                    })
                );

                return this;
            }
        });
    }
);