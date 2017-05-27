var searchIndex = {};
searchIndex["feroxide"] = {"doc":"","items":[[3,"Atom","feroxide","An atom",null,null],[12,"number","","Atom Number (Hydrogen: 1)",0,null],[12,"group","","Atom Group (Hydrogen: 1)",0,null],[12,"symbol","","Atom symbol (Hydrogen: H)",0,null],[12,"name","","Atom name (Hydrogen: hydrogen)",0,null],[12,"mass","","Atom mass (Hydrogen: 1.008)",0,null],[12,"diatomic","","",0,null],[3,"Container","","A container for elements",null,null],[12,"contents","","A vector with the contents of this container",1,null],[12,"available_energy","","The amount of energy available",1,null],[3,"ContainerCompound","","A compound for containers",null,null],[12,"element","","The element it contains",2,null],[12,"moles","","The amount of moles of this element",2,null],[3,"ELECTRON","","",null,null],[3,"Ion","","An `Ion`",null,null],[12,"molecule","","The molecule of this ion",3,null],[12,"charge","","The charge of this ion",3,null],[3,"Molecule","","A molecule",null,null],[12,"compounds","","The compounds it contains",4,null],[3,"MoleculeCompound","","A compound of a molecule",null,null],[12,"atom","","The atom it uses",5,null],[12,"amount","","The amount",5,null],[3,"ElemReaction","","An elementair reaction (not containing ions)",null,null],[12,"lhs","","The left-hand-side",6,null],[12,"rhs","","The right-hand-side",6,null],[12,"is_equilibrium","","",6,null],[3,"ReactionSide","","A side of a reaction",null,null],[12,"compounds","","The compounds of this side",7,null],[3,"ReactionCompound","","A reaction compound",null,null],[12,"element","","The element it uses",8,null],[12,"amount","","The amount of moles needed",8,null],[3,"RedoxReaction","","A Redox reaction",null,null],[12,"reductor","","The reductor",9,null],[12,"oxidator","","The oxidator",9,null],[5,"rc_to_cc","","Convert a given `ReactionCompound` into a `ContainerCompound`",null,{"inputs":[{"name":"reactioncompound"}],"output":{"name":"containercompound"}}],[5,"gcd","","Calculate Greatest Common Divisor (GCD), using Euclides' algorithm",null,{"inputs":[{"name":"i32"},{"name":"i32"}],"output":{"name":"i32"}}],[5,"number_to_greek","","Convert a number to greek notation",null,{"inputs":[{"name":"u8"}],"output":{"name":"string"}}],[5,"number_to_roman","","Convert a number to roman notaion",null,{"inputs":[{"name":"i8"}],"output":{"name":"string"}}],[5,"subscript","","Convert a number to subscript notation",null,{"inputs":[{"name":"u8"}],"output":{"name":"string"}}],[5,"superscript","","Convert a number to superscript notation See also `ion_superscript`",null,{"inputs":[{"name":"u8"}],"output":{"name":"string"}}],[5,"ion_superscript","","Convert a number to ionic superscript notation The difference with normal superscript notation is that the 1 is omitted, also, ionic superscript supports negative numbers (of which the sign is put at the end, instead of at the beginning)",null,{"inputs":[{"name":"atomcharge"}],"output":{"name":"string"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"atom"}}],[11,"from_string","","Convert a string representation to an `Atom`",0,{"inputs":[{"name":"string"}],"output":{"name":"option"}}],[11,"charge_by_group","","Get the charge an atom has based on its group",0,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"eq","","Two `Atom`s are equal when their atom numbers are equal",0,{"inputs":[{"name":"self"},{"name":"atom"}],"output":{"name":"bool"}}],[11,"hash","","",0,{"inputs":[{"name":"self"},{"name":"h"}],"output":null}],[11,"symbol","","",0,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"name","","",0,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"mass","","",0,{"inputs":[{"name":"self"}],"output":{"name":"atommass"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"container"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"self"}],"output":{"name":"containercompound"}}],[11,"react","","Applies given `Reaction` to `Container` Removing the elements on the left-hand side and adding the elements on the right-hand side. If there is enough energy for the reaction, that amount will be consumed otherwise the reaction won't occur. Returns if the reaction succeeded",1,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"bool"}}],[11,"has_elements","","Check if the container has all given elements",1,null],[11,"remove_elements","","Remove given elements from container",1,null],[11,"add_elements","","Add given elements to container",1,null],[11,"stringify","","Convert container to a nice string for displaying",1,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"eq","","Two container compounds are equal when their elements are equal",2,{"inputs":[{"name":"self"},{"name":"containercompound"}],"output":{"name":"bool"}}],[11,"hash","","",2,{"inputs":[{"name":"self"},{"name":"h"}],"output":null}],[11,"get_charge","","",2,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"get_molecule","","",2,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"symbol","","",2,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"name","","",2,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"mass","","",2,{"inputs":[{"name":"self"}],"output":{"name":"atommass"}}],[11,"deref","","",10,{"inputs":[{"name":"self"}],"output":{"name":"ion"}}],[11,"initialize","","",10,{"inputs":[{"name":"self"}],"output":null}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",3,{"inputs":[{"name":"self"},{"name":"ion"}],"output":{"name":"bool"}}],[11,"ne","","",3,{"inputs":[{"name":"self"},{"name":"ion"}],"output":{"name":"bool"}}],[11,"clone","","",3,{"inputs":[{"name":"self"}],"output":{"name":"ion"}}],[11,"hash","","",3,null],[11,"from_string","","Convert a string representation of an `Ion` into one",3,{"inputs":[{"name":"string"}],"output":{"name":"option"}}],[11,"from_molecule","","Convert a `Molecule` into an `Ion`",3,{"inputs":[{"name":"molecule"}],"output":{"name":"ion"}}],[11,"calculate_charge","","Calculate the charge of this `Ion`",3,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"get_charge","","",3,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"get_molecule","","",3,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"symbol","","",3,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"name","","",3,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"mass","","",3,{"inputs":[{"name":"self"}],"output":{"name":"atommass"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",4,{"inputs":[{"name":"self"},{"name":"molecule"}],"output":{"name":"bool"}}],[11,"ne","","",4,{"inputs":[{"name":"self"},{"name":"molecule"}],"output":{"name":"bool"}}],[11,"clone","","",4,{"inputs":[{"name":"self"}],"output":{"name":"molecule"}}],[11,"hash","","",4,null],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",5,{"inputs":[{"name":"self"},{"name":"moleculecompound"}],"output":{"name":"bool"}}],[11,"ne","","",5,{"inputs":[{"name":"self"},{"name":"moleculecompound"}],"output":{"name":"bool"}}],[11,"clone","","",5,{"inputs":[{"name":"self"}],"output":{"name":"moleculecompound"}}],[11,"hash","","",5,null],[11,"from_string","","Convert a string representation of a molecule into one",4,{"inputs":[{"name":"string"}],"output":{"name":"option"}}],[11,"from_string","","Takes a symbol string representing a MoleculeCompound, and turns it into one",5,{"inputs":[{"name":"string"}],"output":{"name":"option"}}],[11,"from_atom","","Converts an Atom into a MoleculeCompound, taking care of diatomic ones",5,{"inputs":[{"name":"atom"}],"output":{"name":"moleculecompound"}}],[11,"symbol","","",4,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"name","","",4,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"mass","","",4,{"inputs":[{"name":"self"}],"output":{"name":"atommass"}}],[11,"symbol","","",5,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"name","","",5,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"mass","","",5,{"inputs":[{"name":"self"}],"output":{"name":"atommass"}}],[11,"get_charge","","",4,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"get_molecule","","",4,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"fmt","","",6,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",6,{"inputs":[{"name":"self"},{"name":"elemreaction"}],"output":{"name":"bool"}}],[11,"ne","","",6,{"inputs":[{"name":"self"},{"name":"elemreaction"}],"output":{"name":"bool"}}],[11,"clone","","",6,{"inputs":[{"name":"self"}],"output":{"name":"elemreaction"}}],[11,"hash","","",6,null],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",7,{"inputs":[{"name":"self"},{"name":"reactionside"}],"output":{"name":"bool"}}],[11,"ne","","",7,{"inputs":[{"name":"self"},{"name":"reactionside"}],"output":{"name":"bool"}}],[11,"clone","","",7,{"inputs":[{"name":"self"}],"output":{"name":"reactionside"}}],[11,"hash","","",7,null],[11,"fmt","","",8,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",8,{"inputs":[{"name":"self"}],"output":{"name":"reactioncompound"}}],[11,"ion_from_string","","Convert a string representation of a reaction into one",6,{"inputs":[{"name":"string"}],"output":{"name":"option"}}],[11,"molecule_from_string","","Convert a string representation of a reaction into one",6,{"inputs":[{"name":"string"}],"output":{"name":"option"}}],[11,"reaction_sign","","Get the sign of the equation ( → or ⇌ ), depending whether it is an equilibrium or not",6,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"swap","","Swap the equation",6,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"ion_from_string","","Convert a string representation of a reactionside into one",7,{"inputs":[{"name":"string"}],"output":{"name":"option"}}],[11,"molecule_from_string","","Convert a string representation of a reactionside into one",7,{"inputs":[{"name":"string"}],"output":{"name":"option"}}],[11,"total_charge","","Calculate the total charge of this reaction side",7,{"inputs":[{"name":"self"}],"output":{"name":"atomcharge"}}],[11,"energy","","Calculate the energy this side has",7,{"inputs":[{"name":"self"}],"output":{"name":"energy"}}],[11,"total_atoms","","Calculate the total amount of atoms this side contains",7,{"inputs":[{"name":"self"}],"output":{"name":"hashmap"}}],[11,"ion_from_string","","Convert a string representation of a reaction compound into one",8,{"inputs":[{"name":"string"}],"output":{"name":"option"}}],[11,"molecule_from_string","","Convert a string representation of a reaction compound into one",8,{"inputs":[{"name":"string"}],"output":{"name":"option"}}],[11,"equalise","","NOTE: This function is still a WIP!",6,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"is_valid","","",6,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"energy_cost","","",6,{"inputs":[{"name":"self"}],"output":{"name":"energy"}}],[11,"elem_reaction","","",6,{"inputs":[{"name":"self"}],"output":{"name":"elemreaction"}}],[11,"add","","Adding two ReactionSide's adds their compounds",7,{"inputs":[{"name":"self"},{"name":"reactionside"}],"output":{"name":"reactionside"}}],[11,"mul","","Multiplying a ReactionSide with a number multiplies the amount of all compounds of that side",7,{"inputs":[{"name":"self"},{"name":"u16"}],"output":{"name":"reactionside"}}],[11,"eq","","Two ReactionCompound's are equal if their elements are equal",8,{"inputs":[{"name":"self"},{"name":"reactioncompound"}],"output":{"name":"bool"}}],[11,"hash","","",8,{"inputs":[{"name":"self"},{"name":"h"}],"output":null}],[11,"symbol","","",6,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"name","","",6,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"mass","","",6,{"inputs":[{"name":"self"}],"output":{"name":"atommass"}}],[11,"symbol","","",7,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"name","","",7,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"mass","","",7,{"inputs":[{"name":"self"}],"output":{"name":"atommass"}}],[11,"symbol","","",8,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"name","","",8,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"mass","","",8,{"inputs":[{"name":"self"}],"output":{"name":"atommass"}}],[11,"get_charge","","",8,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"get_molecule","","",8,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"fmt","","",9,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",9,{"inputs":[{"name":"self"},{"name":"redoxreaction"}],"output":{"name":"bool"}}],[11,"ne","","",9,{"inputs":[{"name":"self"},{"name":"redoxreaction"}],"output":{"name":"bool"}}],[11,"clone","","",9,{"inputs":[{"name":"self"}],"output":{"name":"redoxreaction"}}],[11,"equalise","","",9,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"is_valid","","",9,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"energy_cost","","",9,{"inputs":[{"name":"self"}],"output":{"name":"energy"}}],[11,"elem_reaction","","",9,{"inputs":[{"name":"self"}],"output":{"name":"elemreaction"}}],[11,"symbol","","",9,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"name","","",9,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"mass","","",9,{"inputs":[{"name":"self"}],"output":{"name":"atommass"}}],[0,"data_atoms","","",null,null],[17,"SELENIUM","feroxide::data_atoms","",null,null],[17,"XENON","","",null,null],[17,"CAESIUM","","",null,null],[17,"PHOSPHORUS","","",null,null],[17,"SULFUR","","",null,null],[17,"FRANCIUM","","",null,null],[17,"SILVER","","",null,null],[17,"CALCIUM","","",null,null],[17,"SODIUM","","",null,null],[17,"NEON","","",null,null],[17,"TITANIUM","","",null,null],[17,"NICKEL","","",null,null],[17,"LEAD","","",null,null],[17,"GERMANIUM","","",null,null],[17,"ZINC","","",null,null],[17,"OXYGEN","","",null,null],[17,"GOLD","","",null,null],[17,"CHLORINE","","",null,null],[17,"POTASSIUM","","",null,null],[17,"SILICON","","",null,null],[17,"MAGNESIUM","","",null,null],[17,"FLUORINE","","",null,null],[17,"COBALT","","",null,null],[17,"CARBON","","",null,null],[17,"MANGANESE","","",null,null],[17,"TIN","","",null,null],[17,"BROMINE","","",null,null],[17,"ARSENIC","","",null,null],[17,"HELIUM","","",null,null],[17,"BARIUM","","",null,null],[17,"RUBIDIUM","","",null,null],[17,"VANADIUM","","",null,null],[17,"IRON","","",null,null],[17,"IODINE","","",null,null],[17,"GALLIUM","","",null,null],[17,"ARGON","","",null,null],[17,"CHROMIUM","","",null,null],[17,"ALUMINIUM","","",null,null],[17,"NITROGEN","","",null,null],[17,"KRYPTON","","",null,null],[17,"LITHIUM","","",null,null],[17,"PLATINUM","","",null,null],[17,"BERYLLIUM","","",null,null],[17,"BORON","","",null,null],[17,"COPPER","","",null,null],[17,"HYDROGEN","","",null,null],[17,"ALL_ATOMS","","",null,null],[0,"data_ions","feroxide","",null,null],[3,"HYDROXIDE","feroxide::data_ions","",null,null],[3,"AMMONIUM","","",null,null],[3,"SULPHATE","","",null,null],[11,"deref","","",11,{"inputs":[{"name":"self"}],"output":{"name":"ion"}}],[11,"initialize","","",11,{"inputs":[{"name":"self"}],"output":null}],[11,"deref","","",12,{"inputs":[{"name":"self"}],"output":{"name":"ion"}}],[11,"initialize","","",12,{"inputs":[{"name":"self"}],"output":null}],[11,"deref","","",13,{"inputs":[{"name":"self"}],"output":{"name":"ion"}}],[11,"initialize","","",13,{"inputs":[{"name":"self"}],"output":null}],[0,"data_molecules","feroxide","",null,null],[3,"WATER","feroxide::data_molecules","",null,null],[3,"CO2","","",null,null],[3,"AMMONIA","","",null,null],[3,"SUGAR","","",null,null],[11,"deref","","",14,{"inputs":[{"name":"self"}],"output":{"name":"molecule"}}],[11,"initialize","","",14,{"inputs":[{"name":"self"}],"output":null}],[11,"deref","","",15,{"inputs":[{"name":"self"}],"output":{"name":"molecule"}}],[11,"initialize","","",15,{"inputs":[{"name":"self"}],"output":null}],[11,"deref","","",16,{"inputs":[{"name":"self"}],"output":{"name":"molecule"}}],[11,"initialize","","",16,{"inputs":[{"name":"self"}],"output":null}],[11,"deref","","",17,{"inputs":[{"name":"self"}],"output":{"name":"molecule"}}],[11,"initialize","","",17,{"inputs":[{"name":"self"}],"output":null}],[0,"data_sep","feroxide","",null,null],[3,"SEPMAP","feroxide::data_sep","",null,null],[5,"reaction_to_hash","","Get the hash of a reaction",null,{"inputs":[{"name":"elemreaction"}],"output":{"name":"u64"}}],[5,"get_sep","","Get the Standerd Electrode Potential (SEP) of a reaction",null,{"inputs":[{"name":"elemreaction"}],"output":{"name":"option"}}],[11,"deref","","",18,{"inputs":[{"name":"self"}],"output":{"name":"hashmap"}}],[11,"initialize","","",18,{"inputs":[{"name":"self"}],"output":null}],[0,"display_impls","feroxide","",null,null],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",6,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",8,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[6,"AtomGroup","","should fit 1 to 18",null,null],[6,"AtomMass","","should fit 0.0 to 294.0+, with normal precision [ gram / mol ]",null,null],[6,"AtomNumber","","should fit 0 to 118+",null,null],[6,"Energy","","should fit 0.0 to 1e5+, with high precision [ Joule ]",null,null],[6,"AtomCharge","","should fit -7 to 7",null,null],[6,"Mass","","should fit 0.0 to 1e5+, with high precision [ gram ]",null,null],[6,"Moles","","should fit 0.0 to 1e5+, with high precision [ mol ]",null,null],[6,"SEP","","should fit -5.0 to 5.0, with normal precision [ volt ]",null,null],[8,"Element","","",null,null],[10,"get_charge","","Get the charge of the current Element",19,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[10,"get_molecule","","Get the molecule associated with the current Element",19,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[8,"Properties","","",null,null],[10,"symbol","","Get the symbol of the current item",20,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[10,"name","","Get the name of the current item",20,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[10,"mass","","Get the mass of the current item",20,{"inputs":[{"name":"self"}],"output":{"name":"atommass"}}],[11,"stringify","","Stringify the current item (default: self.symbol())",20,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[8,"Reaction","","",null,null],[10,"is_valid","","Check if the reaction is valid by comparing the amount of total atoms on both sides, and by checking if the total charge on both sides is equal",21,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[10,"equalise","","Balance both sides of the equation to make sure it's valid Returns true if it managed to equalise it, false otherwise",21,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[10,"energy_cost","","Calculate the cost of this reaction This can be negative in case of an exothermic reaction",21,{"inputs":[{"name":"self"}],"output":{"name":"energy"}}],[10,"elem_reaction","","Get the ElemReaction version",21,{"inputs":[{"name":"self"}],"output":{"name":"elemreaction"}}],[14,"is_upper","","",null,null],[14,"is_lower","","",null,null],[14,"is_number","","",null,null],[14,"is_letter","","",null,null],[14,"is_whitespace","","",null,null],[14,"is_vowel","","",null,null],[14,"to_number","","",null,null],[14,"molecule_from_atom","","",null,null],[14,"ion_from_molecule","","",null,null],[14,"ion_from_atom","","",null,null],[11,"stringify","","Stringify the current item (default: self.symbol())",20,{"inputs":[{"name":"self"}],"output":{"name":"string"}}]],"paths":[[3,"Atom"],[3,"Container"],[3,"ContainerCompound"],[3,"Ion"],[3,"Molecule"],[3,"MoleculeCompound"],[3,"ElemReaction"],[3,"ReactionSide"],[3,"ReactionCompound"],[3,"RedoxReaction"],[3,"ELECTRON"],[3,"HYDROXIDE"],[3,"AMMONIUM"],[3,"SULPHATE"],[3,"WATER"],[3,"CO2"],[3,"AMMONIA"],[3,"SUGAR"],[3,"SEPMAP"],[8,"Element"],[8,"Properties"],[8,"Reaction"]]};
initSearch(searchIndex);
