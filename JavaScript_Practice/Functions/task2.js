function checkAge(age) {
  return age > 18 || confirm("Do you have a permission from your parents?");
  //   return age > 18 ? true : confirm("Do you have a permission from your parents?");
  //   if (age > 18) {
  //     return true;
  //   } else {
  //     return confirm("Do you have a permission from your parents?");
  //   }
}

checkAge(16);
