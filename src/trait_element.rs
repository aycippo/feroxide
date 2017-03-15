use molecule::*;
use trait_properties::*;
use types::*;


pub trait Element: Properties + Eq + PartialEq {
    fn get_charge(&self) -> Option<IonCharge>;
    fn get_molecule(&self) -> Option<&Molecule>;
}