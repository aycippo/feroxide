use types::*;

use std::fmt::Debug;


pub trait Properties: Debug {
    fn symbol(&self) -> String;
    fn name(&self) -> String;
    fn mass(&self) -> AtomMass;

    fn stringify(&self) -> String { self.symbol() }
}