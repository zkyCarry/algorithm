/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  // if(!head || !head.next){
  //   return false;
  // }

  // let slow = head;
  // let quick = head;
  // if(quick && quick.next){
  //   slow = slow.next;
  //   quick = quick.next.next;
  //   if(slow === quick){
  //     return true
  //   }
  // }
  // return false;
  let slow = head, fast = head; // 乌龟和兔子同时从起点出发
    while (fast && fast.next) {
        slow = slow.next; // 乌龟走一步
        fast = fast.next.next; // 兔子走两步
        if (fast === slow) // 兔子追上乌龟（套圈），说明有环
            return true;
    }
    return false; // 访问到了链表末尾，无环

};
// @lc code=end

