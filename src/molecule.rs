use atom::*;
use namings::*;
use trait_element::*;
use trait_properties::*;
use types::*;


#[derive(Debug, Eq, PartialEq, Clone, Hash)]
/// A molecule
pub struct Molecule {
    /// The compounds it contains
    pub compounds: Vec<MoleculeCompound>
}


#[derive(Debug, Eq, PartialEq, Clone, Hash)]
/// A compound of a molecule
pub struct MoleculeCompound {
    /// The atom it uses
    pub atom: Atom,


    /// The amount
    pub amount: u8
}


impl Molecule {
    /// Convert a string representation of a molecule into one
    pub fn from_string(string: String) -> Option<Molecule> {
        let mut compounds = vec!{};

        let mut token = String::new();

        for c in string.chars() {
            // Ignore whitespace
            if is_whitespace!(c) {
                continue;
            }

            if is_upper!(c) && token.len() > 0 {
                let compound = MoleculeCompound::from_string(token).unwrap();

                compounds.push(compound);
                token = String::new();
            }

            token.push(c);
        }

        // If some tokens remain, convert it into a compound
        if token.len() > 0 {
            if let Some(compound) = MoleculeCompound::from_string(token) {
                compounds.push(compound);
            }
        }


        if compounds.len() > 0 {
            Some(Molecule {
                compounds: compounds
            })
        } else {
            None
        }
    }
}



impl MoleculeCompound {
    /// Takes a symbol string representing a MoleculeCompound, and turns it into one
    pub fn from_string(string: String) -> Option<MoleculeCompound> {
        let mut amount = 0;

        let mut token = String::new();

        for c in string.chars() {
            if is_letter!(c) {
                token.push(c);
            } else {
                amount *= 10;
                amount += to_number!(c);
            }
        }

        // If no amount given, assume 1
        if amount == 0 {
            amount = 1;
        }


        if let Some(atom) = Atom::from_string(token) {
            Some(MoleculeCompound {
                atom: atom,
                amount: amount
            })
        } else {
            None
        }
    }


    /// Converts an Atom into a MoleculeCompound, taking care of diatomic ones
    pub fn from_atom(atom: Atom) -> MoleculeCompound {
        let amount = if atom.diatomic { 2 } else { 1 };

        MoleculeCompound { atom: atom, amount: amount }
    }
}


impl Properties for Molecule {
    fn symbol(&self) -> String {
        let mut symbol = String::new();

        for compound in self.compounds.iter() {
            symbol += &compound.symbol();
        }

        return symbol;
    }


    fn name(&self) -> String {
        let mut name = String::new();

        for compound in self.compounds.iter() {
            name += &compound.name();
        }

        return name;
    }


    fn mass(&self) -> AtomMass {
        let mut mass = 0.0;

        for compound in self.compounds.iter() {
            mass += compound.mass();
        }

        return mass;
    }
}


impl Properties for MoleculeCompound {
    fn symbol(&self) -> String {
        let mut symbol = String::new();

        symbol += &self.atom.symbol();

        if self.amount > 1 {
            symbol += &subscript(self.amount);
        }

        return symbol;
    }


    fn name(&self) -> String {
        let mut name = String::new();

        if self.amount > 1 {
            name += &number_to_greek(self.amount);
        }

        name += &self.atom.name();

        return name;
    }


    fn mass(&self) -> AtomMass {
        return (self.amount as AtomMass) * self.atom.mass;
    }
}


impl Element for Molecule {
    fn get_charge(&self) -> Option<IonCharge> {
        Some(0)
    }


    fn get_molecule(&self) -> Option<&Molecule> {
        Some(self)
    }
}
