// Soldier
class Soldier 
{
    constructor(h,s)
    {
        this.health = h;
        this.strength = s;
    }
    attack()
    {
        return this.strength;
    }    
    receiveDamage(damage)
    {
        this.health-=damage;
    }    
}


// Viking
class Viking extends Soldier
{
    constructor(n, h, s)
    {
        super(h,s);
        this.name = n;
    }
    receiveDamage(damage)
    {
        this.health-=damage;
        if(this.health>0)
            return `${this.name} has received ${damage} points of damage`;
        else
            return `${this.name} has died in act of combat`;

    }
    battleCry()
    {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier 
{
    constructor(h,s)
    {
        super(h,s);
    }

    receiveDamage(damage)
    {
        this.health-=damage;
        if(this.health>0)
            return `A Saxon has received ${damage} points of damage`;
        else
            return `A Saxon has died in combat`;
    }
}

// War
class War
{
    vikingArmy  = [];
    saxonArmy = [];

    constructor()
    {
    }

    addViking(v)
    {
        this.vikingArmy.push(v);
    }
    addSaxon(s)
    {
        this.saxonArmy.push(s);
    }
    vikingAttack()
    {
        let l_randS = Math.floor(Math.random()*this.saxonArmy.length);
        let l_randV = Math.floor(Math.random()*this.vikingArmy.length);

        let l_result = this.saxonArmy[l_randS].receiveDamage(this.vikingArmy[l_randV].attack());

        for(let i =0; i< this.saxonArmy.length; i++)
            if(this.saxonArmy[i].health <= 0)
                this.saxonArmy.splice(i, 1);

        return l_result;
    }
    saxonAttack()
    {
        let l_randS = Math.floor(Math.random()*this.saxonArmy.length);
        let l_randV = Math.floor(Math.random()*this.vikingArmy.length);

        let l_result = this.vikingArmy[l_randS].receiveDamage(this.saxonArmy[l_randV].attack());

        for(let i =0; i< this.vikingArmy.length; i++)
            if(this.vikingArmy[i].health <= 0)
                this.vikingArmy.splice(i, 1);

        return l_result;
    }
    showStatus()
    {
        if(this.vikingArmy.length === 0)
            return "Saxons have fought for their lives and survive another day...";
        else if(this.saxonArmy.length === 0)
            return "Vikings have won the war of the century!";
        
        return "Vikings and Saxons are still in the thick of battle.";
    }
}
