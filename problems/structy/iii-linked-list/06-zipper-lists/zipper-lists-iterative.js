// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const zipperLists = (head1, head2) => {
  let runner1 = head1;
  let runner2 = head2;

  while (runner1 !== null || runner2 !== null) {
    if (runner1 !== null) {
      let tmp1 = runner1.next;

      if (runner2 !== null) {
        runner1.next = runner2;
      }

      runner1 = tmp1;
    }

    if (runner2 !== null) {
      let tmp2 = runner2.next;

      if (runner1 !== null) {
        runner2.next = runner1;
      }
      runner2 = tmp2;
    }
  }

  // return the head which isn't null
  return head1 || head2;
};
