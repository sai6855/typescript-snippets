const names = {
  firstName:"sai",
  age:20,
  surname:"yam"
}

type Names = typeof names

type PartialKeys<Type,keys extends keyof Type = keyof Type> = {
  [Property in keyof Type]:  Property extends keys ? Type[Property]|undefined: Type[Property];
};

type user3 = PartialKeys<Names,'ages'>

type user2 = PartialKeys<Names>
//   ^?

type user1 = PartialKeys<Names,'age'|'surname'>
//  ^?
