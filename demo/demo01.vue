<template>
  <template v-if="books.length">
    <!-- 开始实现搭建我们的网页结构 -->
    <table>
      <thead>
        <tr>
          <th></th>
          <th>书籍名称</th>
          <th>出版日期</th>
          <th>价格</th>
          <th>购买数量</th>
          <th>具体操作</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, index) in books" key="index"
            :class="{active: index === currentIndex}"
            @click="clickChangeStyle(index)">
          <td>{{ index + 1 }}</td>
          <td>{{ item.bookName }}</td>
          <td>{{ item.bookTime }}</td>
          <td>{{format(item.price)}}</td>
          <td>
            <button :style="decrement" @click="decrementNum(index)">-</button>
            <input :value="item.getNum"/>
            <button :style="increment" @click="incrementNum(index)">+</button>
          </td>
          <td>
            <button @click="moveRaw(index)">移除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div :style="allPrice">总价为: {{ getAllPrice }}</div>
  </template>

  <template v-else>
    <h2>表格为空</h2>
  </template>
</template>

<script lang="js">
export default{
  // 开始实现书写我们的数据
  data() {
    return {
      books: [
        {bookName: "三国演义", bookTime: "2012-11-16", price: 18, getNum: 0},
        {bookName: "水浒传", bookTime: "2012-11-11", price: 12, getNum: 0},
        {bookName: "西游记", bookTime: "2012-11-22", price: 14, getNum: 0},
        {bookName: "红楼梦", bookTime: "2012-11-15", price: 17, getNum: 0}
      ],

      decrement: {
        fontSize: "16px",
      },

      increment: {
        fontSize: "16px",
      },

      allPrice: {
        fontSize: "30px",
        fontWeight: "bold",
        marginTop: "5px"
      },
      currentIndex: -1
    }
  },

  // 开始书写方法
  methods: {
    moveRaw: function(index) {
      this.books.splice(index, 1)
    },
    incrementNum: function(index) {
      this.books[index].getNum++
    },
    decrementNum: function(index) {
      if (this.books[index].getNum <= 0) {
        return
      }
      this.books[index].getNum--
    },

    format: function(context) {
      return `￥${context}`
    },

    clickChangeStyle: function(index) {
      this.currentIndex = index
    }
  },

  // 开始书写计算属性
  computed: {
    getAllPrice: function() {
      let sumPrice = 0
      for(const item of this.books) {
        sumPrice += (item.price * item.getNum)
      }
      return `￥${sumPrice}`
    },
  },

  // 开始实现监听书籍数组的变化
  watch: {
    books: {
      handler() {
        this.books.sort(function(item01, item02) {
          return item02.getNum - item01.getNum
        })
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style scoped>
table {
  :hover {
    cursor: pointer;
  }
  border-collapse: collapse;
  text-align: center;
  width: 100%;
  th, td {
    border: 1px solid black;
    padding: 8px 16px;
  }
  th {
    background-color: aliceblue;
  }

  tbody tr:nth-child(2n - 1) td{
    background-color:bisque
  }
  tbody tr:nth-child(2n) td{
    background-color: #d3d3d3
  }
}
.active {
  background-color: blue;
}
</style>