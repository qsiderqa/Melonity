local crasher = {}

local option = Menu.AddOptionBool({"Vambrace Bug"}, "Crash via Vambrace Bug", false)


local last_tick = 0;
function crasher.OnUpdate()
    if not Menu.IsEnabled(option) then 
        return 
    end
    
    local my_hero = Heroes.GetLocal()
    if not my_hero then 
        return 
    end

    local my_player = Players.GetLocal()
    if not my_player then 
        return 
    end


    local game_time = GameRules.GetGameTime()

    if (game_time >= last_tick + 0.05) then
        last_tick = game_time
    else
        return;
    end

    Player.PrepareUnitOrders(my_player, 16, 331, Vector(0, 0, 0), 331, 3, myHero, false, false)
                   

end

return crasher
