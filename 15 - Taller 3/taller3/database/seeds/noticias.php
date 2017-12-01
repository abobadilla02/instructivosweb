<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class noticias extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('Noticia')->insert([
        	'titular'=>'Elecciones 2017: ¿Quiénes serán vocales de mesa para la segunda vuelta presidencial?',
        	'entrada'=>'Servel informó que no son admisibles las excusas para este proceso. Propaganda y Franja electoral vuelven el 6 de diciembre.',
        	'cuerpo' => 'El próximo domingo 17 de diciembre se llevará a cabo la segunda vuelta presidencial entre el candidato de Chile Vamos, Sebastián Piñera, y Alejandro Guillier, representante oficialista. Esto, tras los resultados obtenidos por ambos en las elecciones, donde obtuvieron 36,64% y 22,70%, respectivamente. 

				Según establece la ley 18.700, quienes resultaron sorteados para cumplir la labor de vocales de mesa el pasado 19 de noviembre también deberán hacerlo para este segundo proceso. Es decir, la lista de seleccionados es la misma para primera y segunda vuelta. 

				Además, el Servicio Electoral (Servel) informó que para esta etapa del proceso eleccionario no proceden las excusas válidas que podían invocarse en primera vuelta, para justificar una ausencia a la convocatoria.

				En caso de que alguno de los vocales no concurra a cumplir con la tarea, se le citará al Juzgado de Policía Local, en donde podrán entregar las justificaciones de la infracción electoral cometida. ',
        	'imagen' => 'http://images.ahoranoticias.cl/2017/11/22/210416_2_5a15802111ff0.jpg',
        	'fecha' => Carbon::create('2017', '09', '09'),
        	'categoria_id' => '1',
        	'usuario_id'=>'1',
        ]);

        DB::table('Noticia')->insert([
        	'titular'=>'Llegó la primavera... y con ella las alergias',
        	'entrada'=>'¿Le pica la garganta? ¿siente los ojos irritados y la congestión nasal le provoca mal genio? usted podría estar sufriendo esta enfermedad.',
        	'cuerpo' => 'Este viernes comenzó oficialmente la primavera, periodo en que se agudizan los síntomas de la alergia.

				Picazón en la garganta y nariz a raíz de la floración y el aumento de polen son posibles de experimentar, pero si se extienden en el tiempo es importante consultar debido a que quienes padecen alergias estacionales pueden ver complicada su calidad de vida.

				En cuanto a los síntomas leves de rinitis, es posible acceder a medicamentos libremente a través de farmacias, pero la recomendación es siempre ver a un médico, ya que las personas problemas cardiacos, hipertensos o quienes toman otros fármacos pueden sufrir efectos adversos.

				Esta semana y según grafica el sitio web polenes.cl, los índices más altos de polen provienen de los plátanos orientales, arces y álamos. 

				Se estima que el 20% de la población en Chile padece rinitis alérgica estacional, también llamada fiebre de heno. El peak de alérgenos del plátano oriental es en septiembre, pero hay que considerar que, por ejemplo en el caso de los pastos, el mayor nivel se alcanza en noviembre, aunque el polen de otras especies que provocan alergia, se extiende hasta marzo.',
        	'imagen' => 'http://www.adnradio.cl/images_remote/358/3588526_n_vir3.jpg?u=230232',
        	'fecha' => Carbon::create('2017', '10', '09'),
        	'categoria_id' => '2',
        	'usuario_id'=>'2',
        ]);

        DB::table('Noticia')->insert([
        	'titular'=>'El hincha solitario ahora volará: Fanático de Puerto Montt podrá seguir gratis al equipo durante 2018',
        	'entrada'=>'Sebastián Carrera recibió un importante regalo producto de su fidelidad con el equipo de sus amores.',
        	'cuerpo' => 'El pasado 22 de octubre, el fanático puertomontino hizo noticia por ser el único simpatizante de los sureños en llegar hasta el estadio Francisco Sánchez Rumoroso de Coquimbo para alentar a su equipo. La historia dio la vuelta al mundo y llegó hasta las oficinas de una reconocida línea aérea que decidió premiar a Carrera por su esfuerzo y pasión.

				El aperrado hincha de Deportes Puerto Montt, Sebastián Carrera, recibió un importante premio producto de su fidelidad con la escuadra "Salmonera".

				El pasado 22 de octubre, el fanático puertomontino hizo noticia por ser el único simpatizante de los sureños en llegar hasta el estadio Francisco Sánchez Rumoroso de Coquimbo para alentar a su equipo.

				La historia dio la vuelta al mundo y llegó hasta las oficinas de una reconocida línea aérea que decidió premiar a Carrera por su esfuerzo y pasión.

				La compañía le regaló pasajes para él y un acompañante para todos los partidos de visita de su equipo en 2018 para que nunca más se sienta solo.

				Sebastián Carrera agredeció el gesto a través de su cuenta de Twitter y señaló que "en todos estos años de profesión (hincha de mi club) jamás recibí un reconocimiento menos un regalo hoy la vida me sonríe , gracias a todos los hinchas esforzados que somos capaces dejar todo por el amor a nuestros colores".',
        	'imagen'=>'http://images-ahn.mdstrm.com/2017/11/24/210606_1_5a183d48f2ffc.jpg?d=800x400',
        	'fecha'=>Carbon::create('2017', '10', '09'),
        	'categoria_id' => '3',
        	'usuario_id'=>'3',
        ]);
    }
}
