var db = {
    medicamentos: [
        {
            id: 1,
            titulo: 'Ibuprofeno',
            descricao: 'O ibuprofeno pode aumentar os efeitos dos anticoagulantes orais(heparina), a concentração sanguínea de lítio e a atividade antiagregante plaquetária, desaconselhando-se, portanto, a administração simultânea de ibuprofeno e tais substâncias.',
            categoria: 'medicamentos',
            src: './img/ibuprofeno.jpg',
            interacao_medicamentosa: [2]
        },
        {
            id: 2,
            titulo: 'Heparina',
            descricao: 'A diminuição do efeito da heparina pode ocorrer em casos de administração concomitante de anti-histamínicos, digitálicos, tetraciclinas e em relação aos abusos de administração de nitroglicerina como também de nicotina.',
            categoria: 'medicamentos',
            src: './img/heparina.jpg',
            interacao_medicamentosa: [1]
        },
        {
            id: 3,
            titulo: 'Clavulin',
            descricao: 'A interação entre antibióticos e analgésicos não é grave, mas um pode anular o efeito do outro, ou, no pior dos casos, de ambos os medicamentos. Antibióticos tomados por via oral, quando associados a remédios para colesterol, aumentam os riscos de danos aos rins.',
            categoria: 'medicamentos',
            src: './img/clavulin.jpg'
        },
        {
            id: 4,
            titulo: 'Desogestrel',
            descricao: 'Podem ocorrer interações com medicamentos ou produtos fitoterápicos indutores de enzimas microssomais, especificamente enzimas do citocromo P450 (CYP), que podem resultar em aumento da depuração, reduzindo as concentrações plasmáticas dos hormônios sexuais e podem diminuir a eficácia de anticoncepcionais orais, incluindo Desogestrel. Esses produtos incluem fenitoína, fenobarbital, primidona, bosentana, carbamazepina, rifampicina; e possivelmente também oxcarbazepina, rifabutina, topiramato, felbamato, griseofulvina, alguns inibidores da protease do HIV (por exemplo, ritonavir, nelfinavir) e inibidores não-nucleosídeos da transcriptase reversa (por exemplo, efavirenz), e o produto fitoterápico erva de São João.',
            categoria: 'medicamentos',
            src: './img/desogestrel.jpg'
        },
        {
            id: 5,
            titulo: 'Varfarina',
            descricao: 'A atividade da varfarina pode ser potencializada por esteróides anabólicos como: etilestranol, metandrostenolona, (noretrandolona), amiodarona, amitriptilina/nortriptilina, azapropazona, aztreonam, benzafibrato, cefamandol, cloranfenicol, hidrato de coral, cimetidina, ciprofloxacino, clofibrato, cotrimoxazol, danazol, destropropoxifeno, destrotiroxina, dipiridamol, eritromicina, neomicina, feprazona, fluconazol, glucagon, metronidazol, miconazol, oxifenilbutazona, fenformina, fenilbutazona, feniramidol, quinidina, salicilatos, tolbutamida, sulfonamidas, outros analgésicos antiinflamatórios, cetoconazol, ácido nalidíxico, norfloxacino, tetraciclinas e outros antibióticos de largo espectro, alopurinol, dissulfiram, metilfenidato, paracetamol, drogas para tratamento de disfunções da tireóide e qualquer droga potencialmente hepatotóxica.',
            categoria: 'medicamentos',
            src: './img/varfarina.png'
        },
        {
            id: 6,
            titulo: 'Paracetamol',
            descricao: 'Não se recomenda a ingestão de paracetamol com altas doses de barbitúricos, carbamazepina, hidantoína, rifampicina, sulfimpirazona. Pode ocorrer aumento do risco de sangramento no uso prolongado de paracetamol concomitantemente com medicamentos anticoagulantes como a varfarina.',
            categoria: 'medicamentos',
            src: './img/paracetamol.jpg'
        },
    ]
}