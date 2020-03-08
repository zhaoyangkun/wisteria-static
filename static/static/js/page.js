//分页实例
function Page(_ref) {
    this.pageSize = _ref.pageSize; //分页个数
    this.pageTotal = _ref.pageTotal; //总共多少页
    this.dataTotal = _ref.dataTotal; //总共多少数据
    this.curPage = _ref.curPage; //初始页码
    this.id = _ref.id; //分页容器ID
    this.ul = document.createElement('ul'); //新建ul
    this.getPage = _ref.getPage; //具体分页函数
    this.init();
}

// 给实例对象添加公共属性和方法
Page.prototype = {
    init: function init() {
        //无数据
        if (this.dataTotal <= 0) {
            return;
        }
        let that = this;
        let pagination = document.getElementById(this.id);
        pagination.innerHTML = '';
        this.ul.innerHTML = '';
        this.ul.className = 'pagination pagination-circle';
        pagination.appendChild(this.ul);
        //上一页
        that.previousPage();
        //分页
        that.getPages().forEach(function (item) {
            let li = document.createElement('li');
            if (item === that.curPage) {
                li.className = 'active';
            } else {
                if (item !== "...") {
                    li.onclick = function () {
                        that.curPage = item;
                        that.init();
                        that.getPage(that.curPage);
                    };
                }
            }
            li.innerHTML = `<a href="javascript:void(0);">${item}</a>`;
            that.ul.appendChild(li);
        });
        //下一页
        that.nextPage();
    },
    //上一页
    previousPage: function previousPage() {
        let that = this;
        let li = document.createElement('li');
        li.innerHTML = `<a href="javascript:void(0)"><span><i class="mdi mdi-chevron-left"></i></span></a>`;
        if (parseInt(that.curPage) > 1) {
            li.onclick = function () {
                that.curPage = parseInt(that.curPage) - 1;
                that.init();
                that.getPage(that.curPage);
            };
        } else {
            li.className = 'disabled';
        }
        this.ul.appendChild(li);
    },
    //获取页码
    getPages: function getPages() {
        let pag = [];
        if (this.curPage <= this.pageTotal) {
            if (this.pageTotal <= 6) {
                let i = this.pageTotal;
                while (i) {
                    pag.unshift(i--);
                }
            } else {
                if (this.curPage === 1) {
                    pag.push(1, 2, "...", this.pageTotal)
                } else if (this.curPage === this.pageTotal) {
                    pag.push(1, "...", this.pageTotal - 1, this.pageTotal)
                } else if (this.curPage === 2 || this.curPage === 3) {
                    for (let i = 1; i < this.curPage; i++) {
                        pag.push(i);
                    }
                    pag.push(this.curPage, this.curPage + 1, "...", this.pageTotal)
                } else if (this.curPage === this.pageTotal - 1 || this.curPage === this.pageTotal - 2) {
                    pag.push(1, "...", this.curPage - 1, this.curPage);
                    for (let i = this.curPage + 1; i <= this.pageTotal; i++) {
                        pag.push(i);
                    }
                } else {
                    pag.push(1, "...", this.curPage - 1, this.curPage, this.curPage + 1, "...", this.pageTotal)
                }
            }
        } else {
            console.error('当前页数不能大于总页数');
        }
        if (!this.pageSize) {
            console.error('显示页数不能为空或者0');
        }
        return pag;
    },
    //下一页
    nextPage: function nextPage() {
        let that = this;
        let li = document.createElement('li');
        li.innerHTML = `<a href="javascript:void(0)"><span><i class="mdi mdi-chevron-right"></i></span></a>`;
        if (parseInt(that.curPage) < parseInt(that.pageTotal)) {
            li.onclick = function () {
                that.curPage = parseInt(that.curPage) + 1;
                that.init();
                that.getPage(that.curPage);
            };
        } else {
            li.className = 'disabled';
        }
        this.ul.appendChild(li);
    },
};