### CMakeLists automatically created with AutoVala
### Do not edit

set (DATADIR "${CMAKE_INSTALL_PREFIX}/${CMAKE_INSTALL_DATAROOTDIR}")
set (PKGDATADIR "${DATADIR}/shmupwarz")
set (GETTEXT_PACKAGE "shmupwarz")
set (RELEASE_NAME "shmupwarz")
set (CMAKE_C_FLAGS "")
set (PREFIX ${CMAKE_INSTALL_PREFIX})
set (VERSION "1.0.0")
set (TESTSRCDIR "${CMAKE_SOURCE_DIR}")
set (DOLLAR "$")

configure_file (${CMAKE_SOURCE_DIR}/src/Config.vala.cmake ${CMAKE_BINARY_DIR}/src/Config.vala)
add_definitions(-DGETTEXT_PACKAGE=\"${GETTEXT_PACKAGE}\")
set (VERSION "1.0.0")
add_definitions (${DEPS_CFLAGS})
link_libraries ( ${DEPS_LIBRARIES} )
link_directories ( ${DEPS_LIBRARY_DIRS} )
find_package (Vala REQUIRED)
include (ValaVersion)
ensure_vala_version ("0.30" MINIMUM)
include (ValaPrecompile)

set (VALA_PACKAGES ${VALA_PACKAGES} SDL2_image)
set (VALA_PACKAGES ${VALA_PACKAGES} SDL2_mixer)
set (VALA_PACKAGES ${VALA_PACKAGES} SDL2_ttf)
set (VALA_PACKAGES ${VALA_PACKAGES} bosco)
set (VALA_PACKAGES ${VALA_PACKAGES} entitas)
set (VALA_PACKAGES ${VALA_PACKAGES} gee-0.8)
set (VALA_PACKAGES ${VALA_PACKAGES} json-glib-1.0)
set (VALA_PACKAGES ${VALA_PACKAGES} sdl2)
set (VALA_PACKAGES ${VALA_PACKAGES} gio-2.0)
set (VALA_PACKAGES ${VALA_PACKAGES} glib-2.0)
set (VALA_PACKAGES ${VALA_PACKAGES} gobject-2.0)
set (VALA_PACKAGES ${VALA_PACKAGES} overlap2d)

set (APP_SOURCES ${APP_SOURCES} ${CMAKE_CURRENT_BINARY_DIR}/Config.vala)
set (APP_SOURCES ${APP_SOURCES} Components.gs)
set (APP_SOURCES ${APP_SOURCES} Entities.gs)
set (APP_SOURCES ${APP_SOURCES} Game/Actor.gs)
set (APP_SOURCES ${APP_SOURCES} Game/ApplicationListener.gs)
set (APP_SOURCES ${APP_SOURCES} Game/CompositeActor.gs)
set (APP_SOURCES ${APP_SOURCES} Game/Event.gs)
set (APP_SOURCES ${APP_SOURCES} Game/Game.gs)
set (APP_SOURCES ${APP_SOURCES} Game/GameScene.gs)
set (APP_SOURCES ${APP_SOURCES} Game/Group.gs)
set (APP_SOURCES ${APP_SOURCES} Game/InputAdapter.gs)
set (APP_SOURCES ${APP_SOURCES} Game/InputProcessor.gs)
set (APP_SOURCES ${APP_SOURCES} Game/MenuScene.gs)
set (APP_SOURCES ${APP_SOURCES} Game/MenuUI.gs)
set (APP_SOURCES ${APP_SOURCES} Game/OptionUI.gs)
set (APP_SOURCES ${APP_SOURCES} Game/Pool.gs)
set (APP_SOURCES ${APP_SOURCES} Game/ScoreUI.gs)
set (APP_SOURCES ${APP_SOURCES} Game/Screen.gs)
set (APP_SOURCES ${APP_SOURCES} Game/ShmupWarzGame.gs)
set (APP_SOURCES ${APP_SOURCES} Game/Stage.gs)
set (APP_SOURCES ${APP_SOURCES} Shmup.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/CollisionSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/ColorTweenSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/DestroySystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/EntitySpawningTimerSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/ExpiringSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/HealthRenderSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/HudRenderSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/MovementSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/PlayerInputSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/RemoveOffscreenShipsSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/RenderPositionSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/ScaleTweenSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/SoundEffectSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/ViewManagerSystem.gs)
set (APP_SOURCES ${APP_SOURCES} shmupwarz.vala)

set (COMPILE_OPTIONS ${COMPILE_OPTIONS} --vapidir=${CMAKE_SOURCE_DIR}/src/vapis )

if ((${CMAKE_BUILD_TYPE} STREQUAL "Debug") OR (${CMAKE_BUILD_TYPE} STREQUAL "RelWithDebInfo"))
	set(COMPILE_OPTIONS ${COMPILE_OPTIONS} "-g")
endif()

set (COMPILE_OPTIONS ${COMPILE_OPTIONS} --disable-warnings )
set (COMPILE_OPTIONS ${COMPILE_OPTIONS} --gresources=${CMAKE_SOURCE_DIR}/data/o2d.gresource.xml )
set (COMPILE_OPTIONS ${COMPILE_OPTIONS} --gresources=${CMAKE_SOURCE_DIR}/data/resources.gresource.xml )

set (CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -g" )

vala_precompile(VALA_C shmupwarz
	${APP_SOURCES}
PACKAGES
	${VALA_PACKAGES}
OPTIONS
	${COMPILE_OPTIONS}
)

SET (VALA_C ${VALA_C} ${o2d_gresource_xml_C_FILE})
SET (VALA_C ${VALA_C} ${resources_gresource_xml_C_FILE})
add_executable(shmupwarz ${VALA_C})
add_dependencies (shmupwarz o2d_gresource_xml)
add_dependencies (shmupwarz resources_gresource_xml)
target_link_libraries( shmupwarz m )


install(TARGETS
	shmupwarz
RUNTIME DESTINATION
	${CMAKE_INSTALL_BINDIR}
)
if(HAVE_VALADOC)
	valadoc(shmupwarz
		${CMAKE_BINARY_DIR}/valadoc/shmupwarz
		${APP_SOURCES}
	PACKAGES
		${VALA_PACKAGES}
	CUSTOM_VAPIS
		${CUSTOM_VAPIS_LIST}
	)
	install(DIRECTORY
		${CMAKE_BINARY_DIR}/valadoc
	DESTINATION
		${CMAKE_INSTALL_DATAROOTDIR}/doc/shmupwarz
	)
endif()
