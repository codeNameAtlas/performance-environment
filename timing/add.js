function add(x, y) {
  return x + y;
}

add(1, 2);

//invoke a native
%OptimizeFunctionOnNextCall(add);
add(3, 4);
//has anything changed?
%DebugPrint(add)
